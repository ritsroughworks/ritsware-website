// src/components/work/Testimonials.jsx
const quotes = [
  { name: "Dr. S", text: "RITSware's kiosk streamlined clinical checks and reduced errors — a practical solution that works." },
  { name: "Retail Lead", text: "Their automation prototype cut checkout time and improved customer satisfaction." }
];

export default function Testimonials() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>What our clients say</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {quotes.map((q, i) => (
              <blockquote key={i} className="p-4 rounded-md" style={{ border: "1px solid var(--border)" }}>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>{q.text}</div>
                <div className="mt-3 font-medium" style={{ color: "var(--text)" }}>— {q.name}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
