// src/components/sections/HomeHero.jsx
export default function HomeHero() {
  return (
    <section className="theme-transition mb-12">
      <div className="relative overflow-hidden rounded-2xl px-6 py-10 md:px-10 md:py-14"
           style={{ backgroundColor: "var(--surface)" }}>
        
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 glow-overlay" />

        <div className="relative z-10 grid gap-10 md:grid-cols-2 items-center">
          {/* Left: Text */}
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wide uppercase"
               style={{ color: "var(--text-muted)" }}>
              RITSware · Innovation & Simplicity
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
                style={{ color: "var(--text)" }}>
              Turning complex technology
              <span className="block font-bold">into simple, accessible solutions.</span>
            </h1>

            <p className="text-sm md:text-base"
               style={{ color: "var(--text-muted)" }}>
              We design AI-powered kiosks, custom software, and hardware that bridge
              creators, industries, and end-users—so technology works the way people think.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/services"
                className="px-5 py-2.5 rounded-md text-sm font-medium text-white bg-gradient-to-r from-rits-usaBlue to-rits-mutedRed"
              >
                Explore our services
              </a>
              <a
                href="/contact"
                className="px-5 py-2.5 rounded-md text-sm font-medium border theme-transition"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                Talk to our team
              </a>
            </div>
          </div>

          {/* Right: Placeholder visual block for now */}
          <div className="hidden md:block">
            <div className="card-glass h-52 md:h-64 flex flex-col justify-center">
              <p className="text-sm font-medium mb-2"
                 style={{ color: "var(--text-muted)" }}>
                Focus Areas
              </p>
              <ul className="space-y-1.5 text-sm">
                <li>• AI-powered kiosk systems</li>
                <li>• Custom software for complex workflows</li>
                <li>• Hardware engineering for medical & retail</li>
                <li>• Domain-driven research & development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
