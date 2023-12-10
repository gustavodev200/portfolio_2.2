import React from "react";

interface Props {
  children: React.ReactNode;
}

const ProjectRoot = ({ children }: Props) => {
  return (
    <div className="w-full h-auto flex flex-col backdrop-blur-md dark:bg-[#192533]/30 bg-[#c4c4c4]/20 p-4 rounded-2xl">
      {children}
    </div>
  );
};

export default ProjectRoot;
