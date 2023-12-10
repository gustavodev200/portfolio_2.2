import Image from "next/image";
import React from "react";
import { SliderComponent } from "../SliderComponent";
import Reveal from "../Reveal";

interface ProjectContentProps {
  imageUrl: string[];
}

const ProjectContent = ({ imageUrl }: ProjectContentProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <SliderComponent images={imageUrl} />
    </div>
  );
};

export default ProjectContent;
