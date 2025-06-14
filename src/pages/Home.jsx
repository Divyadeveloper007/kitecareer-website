import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProgrammingIcons from "../components/home/ProgrammingIcons";
import About from "./About";
import Team from "./Team";
import Clients from "./Clients";
import ServiceSection from "../components/services/ServiceSection";
import AboutSection from "../components/about/AboutSection";
import IntelligentSolutions from "../components/about/IntelligentSolutions";

const Home = () => {
  return (
    <div id="home" className="bg-white min-h-screen font-sans">
      <HeroSection />
      <ProgrammingIcons />
      <AboutSection />
      <IntelligentSolutions />
      <Team />
      <ServiceSection />
      <Clients />
    </div>
  );
};

export default Home;
