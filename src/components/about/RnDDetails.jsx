// src/components/about/RnDDetails.jsx
export default function RnDDetails() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-5xl mx-auto space-y-3">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>Research & Development</h3>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Our R&D practice centers on direct collaboration with domain experts. Instead of building in isolation, we consult practitioners,
            prototype with feedback loops, and validate every feature against real workflows. This reduces risk, shortens adoption time,
            and ensures solutions are practical from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
