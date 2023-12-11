import React from "react";
import Reveal from "./Reveal";

interface Props {
  text: string;
}

const TitlePage = ({ text }: Props) => {
  return (
    <div className="w-full flex items-center justify-center mb-6">
      <Reveal>
        <h2 className="w-[100%] md:text-6xl text-4xl font-bold bg-[#9bb3cb] p-2 rounded-lg flex items-center justify-center dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]">
          {text}
        </h2>
      </Reveal>
    </div>
  );
};

export default TitlePage;
