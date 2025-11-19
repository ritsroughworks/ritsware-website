// src/components/services/ServicesHero.jsx
export default function ServicesHero() {
  return (
    <section className="mb-12">
      <div className="rounded-2xl px-6 py-10 md:px-10 md:py-14" style={{ backgroundColor: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-medium uppercase" style={{ color: "var(--text-muted)" }}>
              Our Services
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mt-2" style={{ color: "var(--text)" }}>
              Practical technology services that simplify complex workflows.
            </h1>
            <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
              From AI-driven kiosks to full hardware builds and tailored software, we deliver end-to-end solutions that integrate with your operations.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="card-glass h-56 md:h-64 flex flex-col justify-center">
              <div className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>How we engage</div>
              <div className="text-sm" style={{ color: "var(--text)" }}>
                Consult → Prototype → Validate → Deploy → Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
