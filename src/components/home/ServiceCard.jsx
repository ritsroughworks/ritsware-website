// src/components/sections/ServiceCard.jsx
export function ServiceCard({ title, desc }) {
  return (
    <div className="p-5 rounded-xl card-glass">
      <h3 className="font-semibold" style={{ color: "var(--text)" }}>{title}</h3>
      <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>{desc}</p>
    </div>
  );
}
