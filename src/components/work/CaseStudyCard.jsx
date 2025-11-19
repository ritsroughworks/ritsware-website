// src/components/work/CaseStudyCard.jsx
import { Link } from "react-router-dom";

export default function CaseStudyCard({ title, subtitle, summary, tags = [], href = "/work" }) {
  return (
    <article className="p-5 rounded-xl card-glass h-full flex flex-col">
      <div className="flex-1">
        <div className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>{subtitle}</div>
        <h3 className="mt-2 text-lg font-semibold" style={{ color: "var(--text)" }}>{title}</h3>
        <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>{summary}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-md" style={{ border: "1px solid var(--border)", color: "var(--text)" }}>
              {t}
            </span>
          ))}
        </div>
        <Link to={href} className="text-sm px-3 py-1 rounded-md bg-rits-usaBlue text-white">View</Link>
      </div>
    </article>
  );
}
