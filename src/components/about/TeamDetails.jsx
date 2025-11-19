// src/components/about/TeamDetails.jsx
const team = [
  { name: "Medical Lead (PhD)", title: "Clinical guidance & compliance" },
  { name: "Lead Engineer", title: "Hardware & software architecture" },
  { name: "Product Manager", title: "Product strategy & delivery" },
  { name: "HR & Ops Lead", title: "People & process" },
];

export default function TeamDetails() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>Leadership & Team</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {team.map((m) => (
              <div key={m.name} className="p-4 rounded-md" style={{ border: "1px solid var(--border)" }}>
                <div className="font-medium" style={{ color: "var(--text)" }}>{m.name}</div>
                <div className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{m.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
