// src/components/sections/ServicesGrid.jsx
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "AI-Powered Kiosk Systems",
    desc: "Interactive kiosks that provide real-time, industry-specific information to users."
  },
  {
    title: "Custom Software",
    desc: "Tailored apps and platforms that simplify complex workflows and integrate AI."
  },
  {
    title: "Hardware Engineering",
    desc: "Robust hardware solutions for medical diagnostics, retail automation and more."
  },
  {
    title: "Domain-Specific Insights",
    desc: "Research-backed solutions developed with direct collaboration from domain experts."
  },
];

export default function ServicesGrid() {
  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  );
}
