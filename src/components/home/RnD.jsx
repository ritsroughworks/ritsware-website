// src/components/sections/RnD.jsx
export default function RnD() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>Research & Development</h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Our R&D philosophy centers on collaboration with domain experts — doctors, engineers,
            and industry specialists — to ensure accuracy and real-world relevance. We prototype,
            test, and iterate with professionals to remove assumptions and deliver practical solutions.
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            This approach ensures compliance, usability, and measurable impact for every product.
          </p>
        </div>
      </div>
    </section>
  );
}
