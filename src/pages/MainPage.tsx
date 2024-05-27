import React, { useRef, useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "components/Header";
import HomeSection from "components/HomeSection";
import AboutSection from "components/AboutSection";
import WorkSection from "components/WorkSection";
import ContactSection from "components/ContactSection";
import ProjectSection from "components/ProjectSection";

const MainPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref: any) => () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (scrollPosition > 100) {
      setshowGoTop(true);
    } else if (scrollPosition < 100) {
      setshowGoTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex" ref={headerRef}>
        <Header
          homeHandler={handleScroll(homeRef)}
          aboutHandler={handleScroll(aboutRef)}
          workHandler={handleScroll(workRef)}
          projectHandler={handleScroll(projectRef)}
          contactHandler={handleScroll(contactRef)}
        />
      </div>
      <div className="flex flex-col flex-1 w-full items-center">
        <div className="sm:w-4/5 2xl:w-3/5 space-y-4">
          <HomeSection ref={homeRef} />
          <AboutSection ref={aboutRef} />
          <WorkSection ref={workRef} />
          <ProjectSection ref={projectRef} />
        </div>
      </div>
      <ContactSection ref={contactRef} />
      <div
        className={`fixed bottom-8 right-8`}
        onClick={handleScroll(headerRef)}
      >
        <div className={`${showGoTop ? "" : "hidden"}`}>
          <Fab
            style={{ color: "#0C4A6E", backgroundColor: "white" }}
            aria-label="scroll to top"
          >
            <ArrowUpwardIcon />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
