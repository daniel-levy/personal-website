import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { Card, Modal } from "flowbite-react";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CircleIcon from "@mui/icons-material/Circle";
import CollectionsIcon from "@mui/icons-material/Collections";

import TestImage1 from "assets/carousel/carousel1.png";
import TestImage2 from "assets/carousel/carousel2.png";
import TestImage3 from "assets/carousel/carousel3.png";
import TestImage4 from "assets/carousel/carousel4.png";

import "react-multi-carousel/lib/styles.css";

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

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  return (
    <div className="absolute flex space-x-3 mt-3 w-full pl-4">
      <button
        className="px-4 py-2 w-auto bg-sky-900 hover:bg-white hover:border-4 m-[4px] hover:m-0 hover:text-sky-900 rounded-full text-white font-semibold hover:border-sky-900 "
        onClick={() => previous()}
      >
        Previous
      </button>
      <button
        className="px-4 py-2 w-auto bg-sky-900 hover:bg-white hover:border-4 m-[4px] hover:m-0 hover:text-sky-900 rounded-full text-white font-semibold hover:border-sky-900"
        onClick={() => next()}
      >
        Next
      </button>
    </div>
  );
};

const projectDetails: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec,  ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec,  ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec,  ",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet malesuada dui. Aliquam urna quam, pharetra ac urna nec, ",
];

const ProjectSection = () => {
  const [imageModalOpen, setImageModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<any>(TestImage1);
  return (
    <>
      <Modal
        show={imageModalOpen}
        dismissible={true}
        onClose={() => {
          setImageModalOpen(false);
        }}
      >
        <Modal.Body>
          <div className="h-full w-full flex flex-col">
            <div className="h-96 w-full">
              <img
                className="object-cover h-full w-full"
                src={currentImage}
                alt="LinkedIn Logo"
              />
            </div>
            <div className="flex-1 w-full flex flex-row gap-x-4 mt-4">
              <div className="w-1/4 h-16">
                <img
                  onClick={(event) => {
                    setCurrentImage(TestImage1);
                    event.stopPropagation();
                  }}
                  className="object-cover h-full w-full"
                  src={TestImage1}
                  alt="LinkedIn Logo"
                />
              </div>
              <div className="w-1/4 h-16">
                <img
                  onClick={(event) => {
                    setCurrentImage(TestImage2);
                    event?.stopPropagation();
                  }}
                  className="object-cover h-full w-full"
                  src={TestImage2}
                  alt="LinkedIn Logo"
                />
              </div>
              <div className="w-1/4 h-16">
                <img
                  onClick={(event) => {
                    setCurrentImage(TestImage3);
                    event?.stopPropagation();
                  }}
                  className="object-cover h-full w-full"
                  src={TestImage3}
                  alt="LinkedIn Logo"
                />
              </div>
              <div className="w-1/4 h-16">
                <img
                  onClick={(event) => {
                    setCurrentImage(TestImage4);
                    event?.stopPropagation();
                  }}
                  className="object-cover h-full w-full"
                  src={TestImage4}
                  alt="LinkedIn Logo"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

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
              customButtonGroup={<ButtonGroup />}
            >
              <div className="flex w-full p-4 h-max">
                <Card className="w-full h-auto pb-6">
                  <div className="h-full flex flex-col justify-start">
                    <div className="flex flex-row h-full w-full">
                      <div className="flex flex-col items-start w-3/5">
                        <div className="flex flex-row items-center space-x-8 w-full">
                          <text className="text-lg font-bold tracking-tight text-gray-900">
                            Placeholder project 2
                          </text>
                          <div className="space-x-6 text-sky-900 hover:cursor-pointer">
                            <OpenInNewIcon />
                            <GitHubIcon />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-6 w-full h-full mt-8">
                          {projectDetails.map((projectDetail) => {
                            return (
                              <div className="flex flex-row space-x-2">
                                <CircleIcon
                                  style={{ color: "#0C4A6E", width: "8px" }}
                                />
                                <text className="text-sm">{projectDetail}</text>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex flex-1 w-full h-full">
                        <div
                          className="w-full h-full flex justify-end items-center mr-6 hover:cursor-pointer"
                          onClick={() => {
                            setImageModalOpen(true);
                          }}
                        >
                          <div className="w-2/3 h-2/3 bg-gray-700">
                            <div className="w-full h-full relative z-0">
                              <div className="relative w-full h-full bg-gray-800 inset-y-4 -inset-x-4 flex justify-center items-center z-0">
                                <div className="relative w-full h-full inset-y-4 -inset-x-4 flex justify-center items-center z-0">
                                  <div className="absolute h-full w-full bg-black/40 " />
                                  <img
                                    className="object-cover h-full w-full"
                                    src={TestImage1}
                                    alt="LinkedIn Logo"
                                  />
                                  <div className="absolute z-50 flex">
                                    <CollectionsIcon
                                      style={{
                                        color: "white",
                                        marginRight: "12px",
                                      }}
                                    />
                                    <div className="text-white tracking-tight">
                                      View Images
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="flex w-full p-4 h-max">
                <Card className="w-full h-auto pb-6">
                  <div className="h-full flex flex-col justify-start">
                    <div className="flex flex-row h-full w-full">
                      <div className="flex flex-col items-start w-3/5">
                        <div className="flex flex-row items-center space-x-8 w-full">
                          <text className="text-lg font-bold tracking-tight text-gray-900">
                            Placeholder project 1
                          </text>
                          <div className="space-x-6 text-sky-900 hover:cursor-pointer">
                            <OpenInNewIcon />
                            <GitHubIcon />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-6 w-full h-full mt-8">
                          {projectDetails.map((projectDetail) => {
                            return (
                              <div className="flex flex-row space-x-2">
                                <CircleIcon
                                  style={{ color: "#0C4A6E", width: "8px" }}
                                />
                                <text className="text-sm">{projectDetail}</text>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex flex-1 w-full h-full">
                        <div className="w-full h-full flex justify-end items-center mr-6">
                          <div className="w-2/3 h-2/3 bg-gray-700">
                            <div className="w-full h-full relative z-0">
                              <div className="relative w-full h-full bg-gray-800 inset-y-4 -inset-x-4 flex justify-center items-center z-0">
                                <div className="relative w-full h-full inset-y-4 -inset-x-4 flex justify-center items-center z-0">
                                  <div className="absolute h-full w-full bg-black/40 " />
                                  <img
                                    className="object-cover h-full w-full"
                                    src={TestImage1}
                                    alt="LinkedIn Logo"
                                  />
                                  <div className="absolute z-50 flex">
                                    <CollectionsIcon
                                      style={{
                                        color: "white",
                                        marginRight: "12px",
                                      }}
                                    />
                                    <div className="text-white tracking-tight">
                                      View Images
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
