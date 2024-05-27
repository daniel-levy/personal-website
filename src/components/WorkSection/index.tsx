import React from "react";

import TelusLogo from "assets/companies/telus_blue.png";
import BDLogo from "assets/companies/builddirect_blue.png";

import WorkExperience from "./WorkExperience";

const experienceList = [
  {
    logo: TelusLogo,
    company: "TELUS",
    date: "April 2023 - Present",
    title: "L3 - Software Developer",
    experience: [
      `Built client applications to enable my colleagues to connect to our enterprise AI models on both Slack and Google
      Chat, and completely redesigned and reimplemented an existing attempt to build a web application for the same
      purpose. Over the first nine months of these applications’ existences, we saw over 17,000 unique users and over
      one million requests handled`,
      `Developed internal Slack applications in Node.js and Python that utilized the power of artificial intelligence to
      make troubleshooting and support documents more accessible while reducing the load on our support team.`,
      `Designed and implemented an internal self reflection application for developers to gain an understanding of
      their satisfaction levels and overall experience while working at TELUS. Over our three month pilot, we found
      that developers who regularly reflected on their days were 45% more satisfied overall than our control group.`,
      `Enabled our automation teams to better streamline the employee onboarding process by developing an API that
      allows for the querying of GitHub usernames with employee ID numbers and vice versa.`,
      `Analyzed and documented the existing process to take an application to production at TELUS in order to unify
      the scattered existing documentation and improve developer experience. Surveyed users reported a reduction in
      the time it took to take an application to production by 14 days on average.`,
    ],
    skills: ["react", "ts", "node", "ai", "gcp", "figma", "pm"],
    site: "https://www.telus.com/en",
  },
  {
    logo: TelusLogo,
    company: "TELUS",
    date: "September 2020 - April 2023",
    title: "GTLP - Technology Specialist",
    experience: [
      `Collaborated with network planners to develop a new network configuration tool for cell sites using React.js for
    the front end and Node.js for the back end. Our application replaced a legacy application and we had an 87%
    satisfaction rate among surveyed planners a month after our production release.`,
      `Managed the refactor of a crucial front door application for field technicians that used AngularJS and PHP for
    the front end and back end respectively. The implementation was planned by me in Jira and responsibilities
    were delegated to a co-op student who was working with me, and I was responsible for keeping the leadership
    team and stakeholders in the loop during development.
    `,
      `Contributed to migration of over 50 microservices from OpenShift to Google Cloud Platform. All configurations
    were updated to work in the new infrastructure and deployments and testing of new instances were done after
    hours to reduce downtime for consumers.
    `,
      `Developed an internal ticket management tool through all stages of the development lifecycle from requirement
    gathering with key stakeholders, to designing and implementing the UI and API in React.js and Fastify, as well as
    the deployment and maintenance of the running services in OpenShift`,
    ],
    skills: ["react", "ts", "node", "gcp", "figma"],
    site: "https://www.telus.com/en",
  },
  {
    logo: BDLogo,
    company: "BuildDirect",
    date: "January 2018 - September 2018",
    title: "Software Developer in Test Co-op",
    experience: [
      `Developed and maintained multiple automated end-to-end test suites for an e-commerce platform using
    Selenium that would run as part of our CICD process in Jenkins.`,
      `Coordinated with multiple development squads to ensure that new tests were able to ensure requirements were
    met before deployments could be done, and then implemented those changes in a timely manner.
    `,
      `Documented and triaged issues that would appear in our production site and helped develop rapid fixes to
    prevent loss of revenue from negative customer experience.`,
    ],
    skills: ["react"],
    site: "https://www.builddirect.com/",
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
