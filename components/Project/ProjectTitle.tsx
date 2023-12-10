import React from "react";

const ProjectTitle = ({ title }: { title: string }) => {
  return (
    <div className=" w-full flex  mt-5">
      <h3 className="text-3xl font-bold ">{title}</h3>
    </div>
  );
};

export default ProjectTitle;
