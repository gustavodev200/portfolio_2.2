"use client";

import { getTechnologyColor } from "@/helpers";
import React from "react";
import Reveal from "../Reveal";

interface Props {
  technologies: string[];
}

const ProjectTechnologies = ({ technologies }: Props) => {
  return (
    <div className="flex items-center mt-2">
      {technologies.map((tech, index) => (
        <div
          key={index}
          style={{ background: getTechnologyColor(tech) }}
          className="font-bold rounded-sm dark:shadow-[3px_3px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)] p-[0.2rem] mr-2"
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default ProjectTechnologies;
