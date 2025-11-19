// src/components/sections/Industries.jsx
const items = ["Healthcare", "Engineering", "Retail", "Human Resources", "Manufacturing"];

export default function Industries() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>Industries We Serve</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {items.map((it) => (
              <div key={it} className="px-4 py-2 rounded-md border" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
                {it}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
