// src/components/work/CaseStudiesGrid.jsx
import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    id: "medzee-kiosk",
    title: "Medzee — Clinical Diagnostic Kiosk",
    subtitle: "Healthcare / Clinical Workflow",
    summary: "An interactive kiosk surfacing diagnostic workflows and decision support for clinical staff — reduced triage time and improved compliance.",
    tags: ["Healthcare", "Kiosk", "AI"]
  },
  {
    id: "denzee-dental",
    title: "Denzee — Dental Workflow Device",
    subtitle: "Dental / Device",
    summary: "End-to-end dental device prototype integrating imaging and workflow support for clinics, improving throughput and record-keeping.",
    tags: ["Medical Device", "Dental"]
  },
  {
    id: "retail-automation",
    title: "Retail Automation & Self-Service",
    subtitle: "Retail / Automation",
    summary: "Checkout and inventory assistance kiosks that streamline customer flow and reduce manual checks in retail environments.",
    tags: ["Retail", "Automation"]
  },
  {
    id: "enterprise-analytics",
    title: "AI Analytics Platform",
    subtitle: "Enterprise / Analytics",
    summary: "Custom analytics stack providing insights from kiosk and device telemetry to improve operations and decision-making.",
    tags: ["Analytics", "AI"]
  }
];

export default function CaseStudiesGrid() {
  return (
    <section className="mb-12">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map(c => (
          <CaseStudyCard
            key={c.id}
            title={c.title}
            subtitle={c.subtitle}
            summary={c.summary}
            tags={c.tags}
            href={`/work#${c.id}`}
          />
        ))}
      </div>
    </section>
  );
}
