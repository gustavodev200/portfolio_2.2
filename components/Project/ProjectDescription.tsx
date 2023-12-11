import React from "react";

interface Props {
  description: string;
}

const ProjectDescription = ({ description }: Props) => {
  return (
    <div className="w-full text-center md:text-justify mt-5">
      <span className="font-bold">{description}</span>
    </div>
  );
};

export default ProjectDescription;
