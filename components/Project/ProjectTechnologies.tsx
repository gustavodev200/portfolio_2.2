"use client";

import { getTechnologyColor } from "@/helpers";
import React from "react";

interface Props {
  technologies: string[];
}

const ProjectTechnologies = ({ technologies }: Props) => {
  return (
    <div className="flex items-center mt-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className={`p-1 mr-2 text-sm ${getTechnologyColor(
            tech
          )} font-bold rounded-sm dark:shadow-[3px_3px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default ProjectTechnologies;
