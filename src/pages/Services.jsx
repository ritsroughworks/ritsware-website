// src/pages/Services.jsx
import ServicesHero from "../components/services/ServicesHero";
import ServicesList from "../components/services/ServicesList";
import ProcessSection from "../components/services/ProcessSection";
import CaseStudiesPreview from "../components/services/CaseStudiesPreview";
import EngageAndPricing from "../components/services/EngageAndPricing";
import CTAService from "../components/services/CTAService";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <CaseStudiesPreview />
      <EngageAndPricing />
      <CTAService />
    </>
  );
}
