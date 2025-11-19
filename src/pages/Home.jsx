// src/pages/Home.jsx
import HomeHero from "../components/home/HomeHero";
import AboutSummary from "../components/home/AboutSummary";
import ServicesGrid from "../components/home/ServicesGrid";
import WhyChooseUs from "../components/home/WhyChooseUs";
import RnD from "../components/home/RnD";
import Industries from "../components/home/Industries";
import TeamPreview from "../components/home/TeamPreview";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutSummary />
      <ServicesGrid />
      <WhyChooseUs />
      <RnD />
      <Industries />
      <CTASection />
    </>
  );
}
