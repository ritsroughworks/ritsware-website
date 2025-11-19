// src/components/work/CaseStudyDetail.jsx
// Lightweight template component for detailed case pages (use later to render detail view)
export default function CaseStudyDetail({ title, challenge, approach, results, images = [] }) {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>{title}</h2>

          <div>
            <h4 className="font-medium" style={{ color: "var(--text)" }}>The challenge</h4>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>{challenge}</p>
          </div>

          <div>
            <h4 className="font-medium" style={{ color: "var(--text)" }}>Our approach</h4>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>{approach}</p>
          </div>

          <div>
            <h4 className="font-medium" style={{ color: "var(--text)" }}>Results</h4>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>{results}</p>
          </div>

          {images.length > 0 && (
            <div className="grid gap-3 md:grid-cols-3">
              {images.map((src, i) => (
                <img key={i} src={src} alt={`${title} ${i}`} className="w-full rounded-md object-cover" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
