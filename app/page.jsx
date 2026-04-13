"use client";
import React from "react";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import AboutSection from "./components/sections/AboutSection";
import ResumeSection from "./components/sections/ResumeSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ResumeSection />
    </>
  );
};

export default Home;
