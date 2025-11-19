// src/components/about/AboutHero.jsx
export default function AboutHero() {
  return (
    <section className="mb-12">
      <div className="rounded-2xl px-6 py-10 md:px-10 md:py-14" style={{ backgroundColor: "var(--surface)" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-medium uppercase" style={{ color: "var(--text-muted)" }}>
              About RITSware
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mt-2" style={{ color: "var(--text)" }}>
              Innovation made simple, technology made accessible.
            </h1>
            <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
              RITSware builds AI-powered software, robust hardware, and research-driven products that streamline workflows across healthcare,
              engineering, retail and HR. Our multidisciplinary team brings expertise and real-world insight to every project.
            </p>
          </div>

          <div className="hidden md:block">
            <div className="card-glass h-56 md:h-64 flex flex-col justify-center">
              <div style={{ color: "var(--text-muted)" }} className="text-sm mb-2">Quick facts</div>
              <div className="flex gap-6">
                <div>
                  <div className="text-xl font-semibold" style={{ color: "var(--text)" }}>AI & Hardware</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>End-to-end solutions</div>
                </div>
                <div>
                  <div className="text-xl font-semibold" style={{ color: "var(--text)" }}>Domain R&D</div>
                  <div className="text-sm" style={{ color: "var(--text-muted)" }}>Expert-led research</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
