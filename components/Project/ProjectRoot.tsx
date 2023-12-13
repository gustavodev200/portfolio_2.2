import React from "react";
import Reveal from "../Reveal";

interface Props {
  children: React.ReactNode;
}

const ProjectRoot = ({ children }: Props) => {
  return (
    <Reveal>
      <div className="w-full min-h-[650px] md:h-[100%] flex flex-col backdrop-blur-md dark:bg-[#192533]/30 bg-[#c4c4c4]/20 p-3 rounded-2xl transform transition duration-500  cursor-pointer hover:dark:shadow-[3px_3px_0px_0px_rgba(257,257,257)] hover:shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]">
        {children}
      </div>
    </Reveal>
  );
};

export default ProjectRoot;
