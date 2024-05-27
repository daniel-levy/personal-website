import React from "react";
import Skill from "./Skill";

interface WorkExperienceProps {
  logo: any;
  company: string;
  date: string;
  title: string;
  experience: string[];
  skills: string[];
  site: string;
}

const WorkExperience = (props: WorkExperienceProps) => {
  const { logo, company, date, title, experience, skills, site } = props;
  return (
    <div className="w-full flex flex-row space-x-10">
      <div
        className="h-32 w-32 bg-sky-900 rounded-full relative z-0 flex justify-center items-center hover:animate-wiggle cursor-pointer"
        onClick={() => window.open(site, "_blank")}
      >
        <div className="h-24 w-24 bg-white rounded-full absolute z-10 flex justify-center items-center">
          <div className="w-14">
            <img
              src={logo}
              alt={`${company} Logo`}
              className="hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 text-neutral-700">
        <div className="w-full flex flex-col">
          <div className="flex justify-between">
            <text className="font-bold text-xl">{company}</text>
            <text className="font-bold text-lg">{date}</text>
          </div>
          <text className="font-bold text-lg text-sky-900">{title}</text>
          <div className="mt-4">
            <ul>
              {experience.map((bullet) => {
                return <li className="mb-4">&#8226; {bullet}</li>;
              })}
            </ul>
          </div>
          <div className="mt-6 flex flex-row gap-x-3 gap-y-3 w-auto flex-wrap">
            {skills.map((skill) => {
              return <Skill key={`${company}:${skill}`} skill={skill} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
