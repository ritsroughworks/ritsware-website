// src/components/services/CaseStudiesPreview.jsx
import { Link } from "react-router-dom";

const caseStudies = [
  { title: "Medzee — Diagnostic kiosk", summary: "A clinical kiosk that surfaces diagnostic workflows and suggestions for staff." },
  { title: "Retail automation", summary: "Automated checkout and inventory assistance using kiosk systems." },
  { title: "Custom dental hardware (Denzee)", summary: "End-to-end dental device supporting modern clinical workflows." }
];

export default function CaseStudiesPreview() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>Selected Work & Case Studies</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.title} className="p-4 rounded-md" style={{ border: "1px solid var(--border)" }}>
                <div className="font-medium" style={{ color: "var(--text)" }}>{c.title}</div>
                <div className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{c.summary}</div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/work" className="text-sm" style={{ color: "var(--text-muted)" }}>View all case studies →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
