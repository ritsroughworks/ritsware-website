// src/components/about/VisionMission.jsx
export default function VisionMission() {
  return (
    <section className="mb-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-glass">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>Our Mission</h3>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            To empower organizations with intuitive, precise technology that simplifies workflows and makes advanced tools accessible to everyone.
          </p>
        </div>

        <div className="card-glass">
          <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>Our Vision</h3>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            A future where complex systems are transparent, usable, and embedded into everyday processes — enabling professionals to focus on outcomes, not tools.
          </p>
        </div>
      </div>
    </section>
  );
}
