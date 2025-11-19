// src/components/services/ProcessSection.jsx
const steps = [
  { title: "Discover", desc: "Understand current workflows and pain points through stakeholder interviews." },
  { title: "Design", desc: "Prototype UX and hardware concepts with domain experts." },
  { title: "Develop", desc: "Build scalable software and reliable hardware with QA." },
  { title: "Deploy", desc: "Integrate with your systems and train teams for adoption." },
  { title: "Support", desc: "Ongoing maintenance, enhancements and monitoring." }
];

export default function ProcessSection() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>Our Process</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.title} className="p-4 rounded-md" style={{ border: "1px solid var(--border)" }}>
                <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{`${i+1}. ${s.title}`}</div>
                <div className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
