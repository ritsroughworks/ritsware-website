// src/components/services/CTAService.jsx
export default function CTAService() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>Start a project with RITSware</h3>
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            Tell us about your challenge and we’ll propose a tailored approach — from prototype to deployment.
          </p>
          <div className="mt-6">
            <a href="/contact" className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-rits-usaBlue to-rits-mutedRed">Get a consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
