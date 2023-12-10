import Reveal from "@/components/Reveal";
import TitlePage from "@/components/TitlePage";
import React from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAntdesign,
  SiExpress,
  SiFigma,
  SiMysql,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const technologiesData = [
  {
    name: "React JS",
    color: "#61dafb",
    icon: <FaReact size={80} />,
  },

  {
    name: "Typescript",
    color: "#007acc",
    icon: <SiTypescript size={80} />,
  },
  {
    name: "Next.js",
    color: "#838383",
    icon: <SiNextdotjs size={80} />,
  },
  {
    name: "Tailwind CSS",
    color: "#06b6d4",
    icon: <SiTailwindcss size={80} />,
  },

  {
    name: "HTML",
    color: "#e34c26",
    icon: <FaHtml5 size={80} />,
  },

  {
    name: "CSS",
    color: "#2862e9",
    icon: <FaCss3Alt size={80} />,
  },

  {
    name: "Javascript",
    color: "#FFD133",
    icon: <IoLogoJavascript size={80} />,
  },

  {
    name: "Styled Components",
    color: "#e99dde",
    icon: <SiStyledcomponents size={80} />,
  },

  {
    name: "Ant Design",
    color: "#0f78ff",
    icon: <SiAntdesign size={80} />,
  },

  {
    name: "Express JS",
    color: "#dddddd",
    icon: <SiExpress size={80} />,
  },
  {
    name: "Node.js",
    color: "#8cc84b",
    icon: <FaNode size={80} />,
  },

  {
    name: "Figma",
    color: "#a259ff",
    icon: <SiFigma size={80} />,
  },
  {
    name: "MySQL",
    color: "#3e6e93",
    icon: <SiMysql size={80} />,
  },

  {
    name: "Github",
    color: "#838383",
    icon: <FaGithub size={80} />,
  },

  {
    name: "Git",
    color: "#f05032",
    icon: <FaGitAlt size={80} />,
  },
];
const Technologie = () => {
  return (
    <div className="w-full h-auto" id="technologies">
      <TitlePage text="Tecnologias" />

      <Reveal>
        <div className="p-10 min-h-auto flex md:flex-row items-center justify-center gap-5 flex-wrap sm:flex-col">
          {technologiesData.map((technologie) => (
            <div
              key={technologie.name}
              className="h-32 w-32 relative cursor-pointer mb-5"
            >
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-0 transform  hover:-rotate-45 transition duration-300">
                <div
                  style={{
                    backgroundColor: technologie.color,
                  }}
                  className={`h-full w-full flex justify-center items-center rounded-lg shadow-2xl`}
                >
                  {technologie.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Technologie;
