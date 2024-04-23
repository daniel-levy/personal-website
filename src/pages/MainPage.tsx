import React, { useRef } from "react";

import Header from "components/Header";
import HomeSection from "components/HomeSection";
import AboutSection from "components/AboutSection";
import WorkSection from "components/WorkSection";
import ContactSection from "components/ContactSection";
import ProjectSection from "components/ProjectSection";

const MainPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref: any) => () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex">
        <Header
          homeHandler={handleScroll(homeRef)}
          aboutHandler={handleScroll(aboutRef)}
          workHandler={handleScroll(workRef)}
          projectHandler={handleScroll(projectRef)}
          contactHandler={handleScroll(contactRef)}
        />
      </div>
      <div className="flex flex-col flex-1 w-full items-center">
        <div className="sm:w-4/5 2xl:w-3/5 space-y-10">
          <HomeSection ref={homeRef} />
          <AboutSection ref={aboutRef} />
          <WorkSection ref={workRef} />
          <ProjectSection ref={projectRef} />
        </div>
      </div>
      <ContactSection ref={contactRef} />
    </div>
  );
};

export default MainPage;
