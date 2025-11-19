// src/components/sections/AboutSummary.jsx
export default function AboutSummary() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>
            About RITSware
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            RITSware (formerly Ratham Innovation and Technology Solutions) transforms
            complex industry challenges into simple, accessible solutions. We combine
            AI-powered software, custom hardware, and domain-driven research to build
            practical tools for healthcare, engineering, retail, and HR.
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Our multidisciplinary team of engineers, physicians, HR specialists, and business
            professionals ensures every product is accurate, usable, and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}
