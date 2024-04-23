import React from "react";

import ImageContainer from "../common/ImageContainer";
import ImageCarousel from "./ImageCarousel";

const AboutSection = (_props: any, ref: any) => {
  return (
    <div ref={ref} className="flex flex-col w-full h-1/2 items-start p-10">
      <div className="flex items-center h-1/2 w-full justify-between space-x-20">
        <div className="flex h-96 flex-col justify-evenly text-start">
          <div className="flex flex-col w-fit">
            <text className="font-bold text-3xl leading-7">About Me</text>
            <div className="w-full h-4 bg-sky-900"></div>
          </div>
          <text className="font-normal text-lg">
            I was born and raised in beautiful British Columbia and I got my
            degree in Computer Engineering from the University of British
            Columbia.
          </text>
          <text className="font-normal text-lg">
            I am a long-time and tortured Vancouver Canucks fan who is trying to
            learn how to play hockey as an adult.
          </text>
          <text className="font-normal text-lg">
            In my free time, I like to spend time with my family, friends and
            lovely fiance, listen to music, and travel around Canada
          </text>
        </div>
        <ImageContainer
          leftInset={false}
          children={
            <div>
              <ImageCarousel />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default React.forwardRef(AboutSection);
