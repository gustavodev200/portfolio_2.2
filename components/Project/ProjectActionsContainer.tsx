import React from "react";

interface ProjectActionsContainerProps {
  children: React.ReactNode;
}

const ProjectActionsContainer = ({
  children,
}: ProjectActionsContainerProps) => {
  return (
    <div className="w-full flex flex-col xl:flex-row justify-end gap-2 mt-8">
      {children}
    </div>
  );
};

export default ProjectActionsContainer;
