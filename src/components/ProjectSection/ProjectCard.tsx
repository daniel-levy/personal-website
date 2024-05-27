import React, { useState } from "react";

import { Card } from "flowbite-react";
import IconButton from "@mui/material/IconButton";

import { Project } from "./index";
import ImageModal from "./ImageModal";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CircleIcon from "@mui/icons-material/Circle";
import CollectionsIcon from "@mui/icons-material/Collections";

const ProjectCard = (props: Project) => {
  const { title, experienceDetails, images, external, github } = props;
  const [imageModalOpen, setImageModalOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<any>(images[0]);
  return (
    <div className="flex w-full p-4 h-max" key={title}>
      <ImageModal
        allImages={images}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        imageModalOpen={imageModalOpen}
        setImageModalOpen={setImageModalOpen}
      />
      <Card className="w-full h-auto pb-6">
        <div className="h-full flex flex-col justify-start">
          <div className="flex flex-row h-full w-full">
            <div className="flex flex-col items-start w-3/5">
              <div className="flex flex-row items-center space-x-8 w-full">
                <text className="text-lg font-bold tracking-tight text-gray-900">
                  {title}
                </text>
                <div className="space-x-1 hover:cursor-pointer">
                  {external && (
                    <IconButton
                      sx={{ color: "#0C4A6E" }}
                      onClick={() => {
                        window.open(external, "_blank");
                      }}
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  )}
                  {github && (
                    <IconButton
                      sx={{ color: "#0C4A6E" }}
                      onClick={() => {
                        window.open(external, "_blank");
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                </div>
              </div>
              <div className="flex flex-col space-y-6 w-full h-full mt-8">
                {experienceDetails.map((detail) => {
                  return (
                    <div className="flex flex-row space-x-2">
                      <CircleIcon style={{ color: "#0C4A6E", width: "8px" }} />
                      <text className="text-sm">{detail}</text>
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
                          src={images[0]}
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
  );
};

export default ProjectCard;
