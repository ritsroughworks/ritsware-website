// src/components/services/ServicesList.jsx
import ServiceDetailCard from "./ServiceDetailCard";

const services = [
  {
    id: "kiosks",
    title: "AI-Powered Kiosk Systems",
    summary: "Interactive kiosks for real-time, industry-specific information and self-service workflows.",
    bullets: ["Custom UI/UX", "Real-time data integration", "Touch, voice & accessibility"]
  },
  {
    id: "software",
    title: "Custom Software Development",
    summary: "Bespoke applications that simplify workflows, integrate AI, and scale with your business.",
    bullets: ["Workflow automation", "ML & analytics", "Secure integrations"]
  },
  {
    id: "hardware",
    title: "Hardware Engineering",
    summary: "Robust hardware designed for medical, retail, and industrial environments.",
    bullets: ["Prototyping & enclosure design", "Embedded systems", "Compliance-ready builds"]
  },
  {
    id: "rnd",
    title: "Domain-Driven R&D",
    summary: "Research-driven solutions developed with domain experts to ensure accuracy and usability.",
    bullets: ["Expert consultations", "User testing", "Iterative prototyping"]
  }
];

export default function ServicesList() {
  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map(s => (
          <ServiceDetailCard key={s.id} {...s} />
        ))}
      </div>
    </section>
  );
}
