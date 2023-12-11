"use client";

import { getTechnologyColor } from "@/helpers";
import React from "react";
import Reveal from "../Reveal";

interface Props {
  technologies: string[];
}

const ProjectTechnologies = ({ technologies }: Props) => {
  return (
    <div className="flex flex-wrap mt-2 gap-2">
      {technologies.map((tech, index) => (
        <div
          key={index}
          style={{ background: getTechnologyColor(tech) }}
          className="md:text-[1rem] text-[0.8rem] font-bold rounded-sm dark:shadow-[3px_3px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)] md:p-[0.2rem] p-[0.1rem] mr-2"
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default ProjectTechnologies;
