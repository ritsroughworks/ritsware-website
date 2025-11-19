// src/components/sections/CTASection.jsx
export default function CTASection() {
  return (
    <section className="mb-12">
      <div className="rounded-2xl px-6 py-10 md:px-10 md:py-14" style={{ background: "linear-gradient(90deg, rgba(10,26,79,0.12), rgba(138,28,40,0.06))" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>
            Ready to simplify your technology?
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            Partner with RITSware to design solutions that are precise, usable, and built for impact.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/contact" className="px-5 py-3 rounded-md text-white bg-gradient-to-r from-rits-usaBlue to-rits-mutedRed">Contact Us</Link>
            <Link to="/services" className="px-5 py-3 rounded-md border" style={{ borderColor: "var(--border)", color: "var(--text)" }}>Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
