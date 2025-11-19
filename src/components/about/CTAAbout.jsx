// src/components/about/CTAAbout.jsx
export default function CTAAbout() {
  return (
    <section className="mb-12">
      <div className="rounded-2xl px-6 py-10 md:px-10 md:py-14" style={{ background: "linear-gradient(90deg, rgba(10,26,79,0.08), rgba(138,28,40,0.04))" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>Work with us</h3>
          <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
            If you’re ready to simplify complex processes or explore a custom solution, let’s talk. We partner closely with teams to deliver high-impact products.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-rits-usaBlue to-rits-mutedRed">Contact the team</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
