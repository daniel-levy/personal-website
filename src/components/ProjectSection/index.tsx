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
    title: "Project 1",
    experienceDetails: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec,  ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec,  ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec,  ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec, ",
    ],
    images: [TestImage1, TestImage2, TestImage3, TestImage4],
    github: "test",
    external: "test",
  },
  {
    title: "Project 2",
    experienceDetails: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec,  ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec,  ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec,  ",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec, ",
    ],
    images: [TestImage1, TestImage2, TestImage3, TestImage4],
  },
];

const ProjectSection = () => {
  return (
    <>
      <div className="flex flex-col w-full h-1/2 items-start p-10">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-fit">
            <text className="font-bold text-3xl leading-7">Projects</text>
            <div className="w-full h-4 bg-sky-900"></div>
          </div>
          <div className="mt-10 h-auto w-full relative">
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
    </>
  );
};

export default ProjectSection;
