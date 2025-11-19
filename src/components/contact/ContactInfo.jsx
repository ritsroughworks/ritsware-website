// src/components/contact/ContactInfo.jsx
export default function ContactInfo() {
  return (
    <aside className="space-y-4">
      <div className="card-glass p-5">
        <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>Contact Details</div>
        <div className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <div>📍 RITSware (Head Office) — City, Country</div>
          <div>📧 hello@ritsware.example</div>
          <div>📞 +91 98765 43210</div>
        </div>
      </div>

      <div className="card-glass p-5">
        <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>Office hours</div>
        <div className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
          Monday — Friday, 9:30 AM — 6:00 PM
        </div>
      </div>
    </aside>
  );
}
