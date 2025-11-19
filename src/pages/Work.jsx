// src/pages/Work.jsx
import WorkHero from "../components/work/WorkHero";
import CaseStudiesGrid from "../components/work/CaseStudiesGrid";
import MetricsAndImpact from "../components/work/MetricsAndImpact";
import Testimonials from "../components/work/Testimonials";
import CTAWork from "../components/work/CTAWork";

export default function Work() {
  return (
    <>
      <WorkHero />
      <CaseStudiesGrid />
      <MetricsAndImpact />
      <Testimonials />
      <CTAWork />
    </>
  );
}
