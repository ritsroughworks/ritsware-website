// src/components/work/MetricsAndImpact.jsx
const metrics = [
  { label: "Avg. Triage Time Reduction", value: "28%" },
  { label: "Workflow Adoption", value: "92%" },
  { label: "Deployment Time (Avg.)", value: "8 weeks" }
];

export default function MetricsAndImpact() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 items-center text-center">
          {metrics.map(m => (
            <div key={m.label}>
              <div className="text-2xl font-bold" style={{ color: "var(--text)" }}>{m.value}</div>
              <div className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
