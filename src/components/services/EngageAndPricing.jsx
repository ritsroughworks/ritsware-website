// src/components/services/EngageAndPricing.jsx
export default function EngageAndPricing() {
  return (
    <section className="mb-12">
      <div className="rounded-2xl px-6 py-10 md:px-10 md:py-14" style={{ background: "linear-gradient(90deg, rgba(10,26,79,0.06), rgba(138,28,40,0.03))" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>Engagement Models</h3>
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            We offer flexible engagement models: fixed-scope projects, retained R&D partnerships, and support contracts. Each engagement includes discovery and a clear roadmap.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-md" style={{ border: "1px solid var(--border)" }}>
              <div className="font-semibold" style={{ color: "var(--text)" }}>Fixed Project</div>
              <div className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>Clear scope, milestone-driven deliverables.</div>
            </div>
            <div className="p-4 rounded-md" style={{ border: "1px solid var(--border)" }}>
              <div className="font-semibold" style={{ color: "var(--text)" }}>R&D Partnership</div>
              <div className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>Long-term research and prototyping support.</div>
            </div>
            <div className="p-4 rounded-md" style={{ border: "1px solid var(--border)" }}>
              <div className="font-semibold" style={{ color: "var(--text)" }}>Support & Ops</div>
              <div className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>Managed maintenance and continuous improvement.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
