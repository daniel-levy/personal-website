import React from "react";

import TelusLogo from "assets/companies/telus_blue.png";
import BDLogo from "assets/companies/builddirect_blue.png";
import SierraLogo from "assets/companies/sierra_blue.png";

import WorkExperience from "./WorkExperience";

const experienceList = [
  {
    logo: TelusLogo,
    company: "TELUS",
    date: "April 2023 - Present",
    title: "Cloud Developer",
    experience:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum enim in hendrerit blandit. Suspendisse potenti. Nunc sit amet imperdiet felis. Donec tincidunt, justo vehicula interdum porttitor, diam lacus tincidunt ex, eu interdum magna dolor in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    skills: ["react", "ts", "node", "ai", "gcp", "figma", "pm"],
  },
  {
    logo: TelusLogo,
    company: "TELUS",
    date: "September 2020 - April 2023",
    title: "Technical Specialist",
    experience:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum enim in hendrerit blandit. Suspendisse potenti. Nunc sit amet imperdiet felis. Donec tincidunt, justo vehicula interdum porttitor, diam lacus tincidunt ex, eu interdum magna dolor in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    skills: ["react"],
  },
  {
    logo: BDLogo,
    company: "BuildDirect",
    date: "January 2018 - September 2018",
    title: "Software Developer in Test Co-op",
    experience:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum enim in hendrerit blandit. Suspendisse potenti. Nunc sit amet imperdiet felis. Donec tincidunt, justo vehicula interdum porttitor, diam lacus tincidunt ex, eu interdum magna dolor in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    skills: ["react"],
  },
  {
    logo: SierraLogo,
    company: "Sierra Wireless",
    date: "May 2017 - January 2018",
    title: "Software Test Co-op",
    experience:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum enim in hendrerit blandit. Suspendisse potenti. Nunc sit amet imperdiet felis. Donec tincidunt, justo vehicula interdum porttitor, diam lacus tincidunt ex, eu interdum magna dolor in ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    skills: ["react"],
  },
];

const WorkSection = (_props: any, ref: any) => {
  return (
    <div ref={ref} className="flex flex-col w-full h-1/2 items-start p-10">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-fit">
          <text className="font-bold text-3xl leading-7">Work</text>
          <div className="w-full h-4 bg-sky-900"></div>
        </div>
        <div className="mt-10 space-y-20">
          {experienceList.map((experience) => {
            return (
              <WorkExperience
                key={`${experience.company}:${experience.date}`}
                {...experience}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(WorkSection);
