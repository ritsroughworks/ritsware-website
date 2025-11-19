// src/components/services/ServiceDetailCard.jsx
export default function ServiceDetailCard({ title, summary, bullets = [] }) {
  return (
    <article className="p-6 rounded-xl card-glass">
      <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>{title}</h3>
      <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>{summary}</p>
      {bullets.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 text-rits-usaBlue font-bold">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <a href="/contact" className="inline-block px-4 py-2 rounded-md text-white bg-gradient-to-r from-rits-usaBlue to-rits-mutedRed text-sm">Talk to our experts</a>
      </div>
    </article>
  );
}
