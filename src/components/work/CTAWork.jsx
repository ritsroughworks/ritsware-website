// src/components/work/CTAWork.jsx
export default function CTAWork() {
  return (
    <section className="mb-12">
      <div className="rounded-2xl px-6 py-8 md:px-10 md:py-12" style={{ background: "linear-gradient(90deg, rgba(10,26,79,0.08), rgba(138,28,40,0.04))" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>See similar results for your organisation</h3>
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            Share a brief about your environment and challenges — we’ll outline an approach and expected impact.
          </p>
          <div className="mt-6">
            <a href="/contact" className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-rits-usaBlue to-rits-mutedRed">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
