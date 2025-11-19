// src/components/sections/WhyChooseUs.jsx
export default function WhyChooseUs() {
  const bullets = [
    "Simplification without compromise — intuitive processes with full functionality.",
    "Cross-industry expertise across healthcare, engineering, retail and HR.",
    "End-to-end hardware + software solutions for seamless integration.",
    "Research-led development with direct domain expert involvement."
  ];

  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>Why Choose RITSware</h2>
          <ul className="mt-4 space-y-3">
            {bullets.map((b, i) => (
              <li key={i} className="text-sm flex items-start gap-3" style={{ color: "var(--text-muted)" }}>
                <span className="mt-1 text-rits-usaBlue font-bold">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
