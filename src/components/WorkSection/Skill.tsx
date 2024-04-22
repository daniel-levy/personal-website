import React from "react";

import ReactLogo from "assets/skills/react_logo.png";
import FigmaLogo from "assets/skills/figma_logo.png";
import NodeLogo from "assets/skills/node_logo.png";
import TsLogo from "assets/skills/typescript_logo.png";
import AiLogo from "assets/skills/ai_logo.png";
import GcpLogo from "assets/skills/gcp_logo.png";
import PmLogo from "assets/skills/pm_logo.png";

interface SkillsProps {
  skill: string;
}

interface SkillObject {
  name: string;
  logo: any;
}

const skillsList = {
  react: {
    name: "React",
    logo: ReactLogo,
  },
  figma: {
    name: "Figma",
    logo: FigmaLogo,
  },
  node: {
    name: "Node.js",
    logo: NodeLogo,
  },
  ts: {
    name: "TypeScript",
    logo: TsLogo,
  },
  ai: {
    name: "Artificial Intelligence",
    logo: AiLogo,
  },
  gcp: {
    name: "Google Cloud Platform",
    logo: GcpLogo,
  },
  pm: {
    name: "Project Management",
    logo: PmLogo,
  },
};

const Skill = (props: SkillsProps) => {
  const { skill } = props;
  const currentSkill: SkillObject =
    skillsList[skill as keyof typeof skillsList];
  return (
    <div className="w-fit h-auto py-2 px-3 bg-sky-900 text-white rounded-full flex justify-center items-center">
      <div className="w-4 h-5 flex flex-col justify-center">
        <img
          src={currentSkill.logo}
          alt="React Logo"
          className="hover:cursor-pointer"
        />
      </div>
      <text className="font-semibold text-sm ml-3 mr-2">
        {currentSkill.name}
      </text>
    </div>
  );
};

export default Skill;
