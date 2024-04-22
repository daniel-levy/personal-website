import React from "react";

import Header from "components/Header";
import HomeSection from "components/HomeSection";
import AboutSection from "components/AboutSection";
import WorkSection from "components/WorkSection";
import ContactSection from "components/ContactSection";
import ProjectSection from "components/ProjectSection";

const MainPage = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex">
        <Header />
      </div>
      <div className="flex flex-col flex-1 w-full items-center">
        <div className="sm:w-4/5 2xl:w-3/5 space-y-10">
          <HomeSection />
          <AboutSection />
          <WorkSection />
          <ProjectSection />
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default MainPage;
