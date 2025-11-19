// src/pages/About.jsx
import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import VisionMission from "../components/about/VisionMission";
import OurStory from "../components/about/OurStory";
import WhatMakesUs from "../components/about/WhatMakesUs";
import TeamDetails from "../components/about/TeamDetails";
import RnDDetails from "../components/about/RnDDetails";
import CTAAbout from "../components/about/CTAAbout";

export default function About() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <VisionMission />
      <OurStory />
      <WhatMakesUs />
      <TeamDetails />
      <RnDDetails />
      <CTAAbout />
    </>
  );
}
