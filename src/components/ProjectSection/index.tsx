import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import TestImage1 from "assets/carousel/carousel1.png";
import TestImage2 from "assets/carousel/carousel2.png";
import TestImage3 from "assets/carousel/carousel3.png";
import TestImage4 from "assets/carousel/carousel4.png";

import CustomButtons from "./CustomButtons";
import ProjectCard from "./ProjectCard";

export interface Project {
  title: string;
  external?: string;
  github?: string;
  experienceDetails: string[];
  images: any[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const projects: Project[] = [
  {
    title: "Unicorn.ai - Generative AI @ TELUS",
    experienceDetails: [
      "Lead the development and design of an internal web application to enable fellow TELUS colleagues to utilize the latest in generative AI safely and optimally for TELUS",
      "Redesigned the user interface in Figma and then developed the new interface using React and Material UI to give the page a more intuitive and modern presentation",
      "Once refactoring and modernization was completed, added new requested features such as the ability to create customized AI assistants, streamlined and simplified the chat experience, and adding a Lab feature that allows users to compare multiple models simultaneously",
      "Contributed to our other AI clients on Google Chat and Slack, and together these tools had over 25,000 unique users and over a million requests in just under nine months",
    ],
    images: [TestImage2, TestImage3, TestImage4],
  },
  {
    title: "Unicorn.ai - Generative AI @ TELUS",
    experienceDetails: [
      "Lead the development and design of an internal web application to enable fellow TELUS colleagues to utilize the latest in generative AI safely and optimally for TELUS",
      "Redesigned the user interface in Figma and then developed the new interface using React and Material UI to give the page a more intuitive and modern presentation",
      "Once refactoring and modernization was completed, added new requested features such as the ability to create customized AI assistants, streamlined and simplified the chat experience, and adding a Lab feature that allows users to compare multiple models simultaneously",
      "Contributed to our other AI clients on Google Chat and Slack, and together these tools had over 25,000 unique users and over a million requests in just under nine months",
    ],
    images: [TestImage2, TestImage3, TestImage4],
  },
];

const ProjectSection = (_props: any, ref: any) => {
  return (
    <div ref={ref} className="flex flex-col w-full h-1/2 items-start p-10">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-fit">
          <text className="font-bold text-3xl leading-7 z-50">Projects</text>
          <div className="w-full h-4 bg-sky-900"></div>
        </div>
        <div className="mt-4 h-auto w-full relative">
          <Carousel
            responsive={responsive}
            renderButtonGroupOutside={true}
            arrows={false}
            customButtonGroup={<CustomButtons />}
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(ProjectSection);
