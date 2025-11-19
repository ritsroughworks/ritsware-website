// src/components/about/CompanyOverview.jsx
export default function CompanyOverview() {
  return (
    <section className="mb-12">
      <div className="card-glass">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>Company Overview</h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            RITSware (formerly Ratham Innovation and Technology Solutions) transforms complex industry problems into simple,
            usable solutions. We combine software, hardware, and hands-on research to deliver products that are accurate, compliant,
            and easy to adopt. Our clients range from clinics and manufacturers to retail and HR teams.
          </p>
        </div>
      </div>
    </section>
  );
}
