// src/components/about/WhatMakesUs.jsx
export default function WhatMakesUs() {
  const points = [
    "Domain-driven R&D with direct expert involvement",
    "End-to-end hardware and software delivery",
    "Focus on simplifying complex workflows without losing accuracy",
    "Multidisciplinary team for practical, compliant solutions"
  ];

  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>What Makes Us Different</h3>
          <ul className="mt-4 space-y-3">
            {points.map((p, i) => (
              <li key={i} className="text-sm flex items-start gap-3" style={{ color: "var(--text-muted)" }}>
                <span className="mt-1 text-rits-usaBlue font-bold">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
