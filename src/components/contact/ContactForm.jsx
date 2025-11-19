// src/components/contact/ContactForm.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formRef.current) return;

    // Basic client-side validation
    const form = formRef.current;
    const formData = new FormData(form);
    const from_name = formData.get("from_name")?.toString().trim();
    const from_email = formData.get("from_email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!from_name || !from_email || !message) {
      setStatus({ loading: false, success: false, message: "Please fill name, email and message." });
      return;
    }

    setStatus({ loading: true, success: null, message: "" });

    try {
      // sendForm will automatically take inputs from the form
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      // res.status === 200 on success
      setStatus({ loading: false, success: true, message: "Message sent — we will respond soon." });
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ loading: false, success: false, message: "Failed to send message. Please try again later." });
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
        <label className="block text-sm mb-1" style={{ color: "var(--text-muted)" }}>Company (optional)</label>
        <input name="company" className="w-full px-3 py-2 rounded-md border" style={{ borderColor: "var(--border)", background: "transparent", color: "var(--text)" }} />
      </div>

      <div>
        <label className="block text-sm mb-1" style={{ color: "var(--text-muted)" }}>Phone (optional)</label>
        <input name="phone" className="w-full px-3 py-2 rounded-md border" style={{ borderColor: "var(--border)", background: "transparent", color: "var(--text)" }} />
      </div>

      <div>
        <label className="block text-sm mb-1" style={{ color: "var(--text-muted)" }}>Message</label>
        <textarea name="message" required rows="6" className="w-full px-3 py-2 rounded-md border" style={{ borderColor: "var(--border)", background: "transparent", color: "var(--text)" }} />
      </div>

      {/* Hidden field you can map in the email template */}
      <input type="hidden" name="source" value="Website - Contact Page" />

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status.loading}
          className="px-5 py-2.5 rounded-md text-white bg-gradient-to-r from-rits-usaBlue to-rits-mutedRed"
        >
          {status.loading ? "Sending…" : "Send Message"}
        </button>

        {status.success === true && (
          <div className="text-sm" style={{ color: "green" }}>{status.message}</div>
        )}
        {status.success === false && (
          <div className="text-sm" style={{ color: "var(--text-muted)" }}>{status.message}</div>
        )}
      </div>
    </form>
  );
}
