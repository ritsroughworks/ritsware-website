// src/components/work/WorkHero.jsx
export default function WorkHero() {
  return (
    <section className="mb-12">
      <div className="rounded-2xl px-6 py-10 md:px-10 md:py-14" style={{ backgroundColor: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-medium uppercase" style={{ color: "var(--text-muted)" }}>
              Our Work
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mt-2" style={{ color: "var(--text)" }}>
              Case studies & projects that show how we simplify complexity
            </h1>
            <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
              Browse selected projects across healthcare, retail, and engineering that demonstrate our end-to-end approach — from discovery to deployment.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="card-glass h-56 md:h-64 flex flex-col justify-center">
              <div className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>Highlights</div>
              <div className="text-sm" style={{ color: "var(--text)" }}>
                Real impact, measurable outcomes, and domain-driven design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
