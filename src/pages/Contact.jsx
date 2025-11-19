// src/pages/Contact.jsx
import { useEffect, useState } from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";

/**
 * This page dynamically imports the ContactForm component at runtime.
 * If the ContactForm module throws during import (e.g. EmailJS issues),
 * the error is caught and shown to the user instead of crashing the entire app.
 */

export default function Contact() {
  const [FormComp, setFormComp] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    // dynamic import so any import-time error doesn't break the entire app
    import("../components/contact/ContactForm.jsx")
      .then((mod) => {
        if (!mounted) return;
        // support both default and named exports defensively
        const C = mod?.default ?? Object.values(mod)[0];
        setFormComp(() => C ?? null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load ContactForm:", err);
        if (!mounted) return;
        setLoadError(err?.message || String(err));
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <ContactHero />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="card-glass p-6">
            {/* Loading state */}
            {loading && (
              <div className="py-12 text-center" style={{ color: "var(--text-muted)" }}>
                Loading contact form…
              </div>
            )}

            {/* If load error, show helpful message and a safe fallback form */}
            {loadError && (
              <div className="space-y-4">
                <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  Contact form temporarily unavailable
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>
                  There was a problem loading the contact form. You can still reach us via email:
                  <div className="mt-2"><a href="mailto:hello@ritsware.example" style={{ color: "var(--text)" }}>hello@ritsware.example</a></div>
                </div>

                {/* Optional simple fallback form (posts to window.console only) */}
                <FallbackContactForm />
              </div>
            )}

            {/* If loaded successfully, render the form component */}
            {FormComp && !loadError && <FormComp />}
          </div>
        </div>

        <div>
          <ContactInfo />
        </div>
      </div>
    </>
  );
}

/* Minimal safe fallback form component shown when ContactForm fails to load.
   It does not import EmailJS and only logs to console — useful to keep the page functional.
   You can remove this if you prefer no fallback.
*/
function FallbackContactForm() {
  useEffect(() => {
    // focus or other client-side setup could go here
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.info("Fallback contact submission (not sent):", data);
    alert("Fallback form captured your message. Please email hello@ritsware.example to follow up.");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--text-muted)" }}>Name</label>
          <input name="from_name" required className="w-full px-3 py-2 rounded-md border" style={{ borderColor: "var(--border)", background: "transparent", color: "var(--text)" }} />
        </div>
        <div>
          <label className="block text-sm mb-1" style={{ color: "var(--text-muted)" }}>Email</label>
          <input name="from_email" type="email" required className="w-full px-3 py-2 rounded-md border" style={{ borderColor: "var(--border)", background: "transparent", color: "var(--text)" }} />
        </div>
      </div>

      <div>
        <label className="block text-sm mb-1" style={{ color: "var(--text-muted)" }}>Message</label>
        <textarea name="message" required rows="5" className="w-full px-3 py-2 rounded-md border" style={{ borderColor: "var(--border)", background: "transparent", color: "var(--text)" }} />
      </div>

      <div>
        <button type="submit" className="px-5 py-2.5 rounded-md text-white bg-gradient-to-r from-rits-usaBlue to-rits-mutedRed">Submit</button>
      </div>
    </form>
  );
}
