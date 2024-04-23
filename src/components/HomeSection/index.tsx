import React from "react";
import ImageContainer from "components/common/ImageContainer";
import DanielImage from "assets/daniel.png";

const HomeSection = (_props: any, ref: any) => {
  return (
    <div
      ref={ref}
      className="flex flex-col h-1/2 w-full items-start mt-16 p-10"
    >
      <div className="flex items-center justify-start w-full space-x-20">
        <ImageContainer
          leftInset
          children={<img src={DanielImage} className="h-96" alt="daniel"></img>}
        />
        <div className="flex flex-col justify-evenly h-96 text-start">
          <text className="font-bold text-5xl">Hi! My name is Daniel Levy</text>
          <text className="font-normal text-2xl">
            I am a software developer based out of Vancouver, British Columbia
            with a passion for creating awesome experiences
          </text>
          <text className="font-normal text-2xl">It's great to meet you!</text>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(HomeSection);
