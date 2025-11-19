// src/components/contact/ContactHero.jsx
export default function ContactHero() {
  return (
    <section className="mb-8">
      <div className="rounded-2xl px-6 py-10 md:px-10 md:py-14" style={{ backgroundColor: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium uppercase" style={{ color: "var(--text-muted)" }}>
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2" style={{ color: "var(--text)" }}>
            Let’s discuss how we can simplify your technology.
          </h1>
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
            Send us a message with a brief about your challenge — we typically reply within 2 business days.
          </p>
        </div>
      </div>
    </section>
  );
}
