// src/components/sections/TeamPreview.jsx
const team = [
  { name: "Medical Lead (PhD)", role: "Healthcare & clinical guidance" },
  { name: "Lead Engineer", role: "Hardware & software engineering" },
  { name: "Business Lead", role: "Strategy & operations" }
];

export default function TeamPreview() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>Our Team</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {team.map((t) => (
              <div key={t.name} className="p-4 rounded-md" style={{ border: "1px solid var(--border)" }}>
                <div className="font-medium" style={{ color: "var(--text)" }}>{t.name}</div>
                <div className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
