import Reveal from "@/components/Reveal";
import TitlePage from "@/components/TitlePage";
import Image from "next/image";
import React from "react";
import imageAbout from "../../../public/images/sobre.jpg";

const tecnologies = [
  "React",
  "Next",
  "Tailwind",
  "Typescript",
  "Styled Components",
  "Rest API",
];

const About = () => {
  return (
    <div
      className="w-full h-auto md:mb-32 flex flex-col items-center p-2 md:p-10 lg:p-10 xl:p-0"
      id="about"
    >
      <TitlePage text="Sobre" />

      <main className="grid grid-cols-1 md:grid-cols-2 md:mt-[4rem]">
        <div className="flex items-center justify-center w-[100%] md:w-[400px] mb-6 md:mb-0">
          <Reveal>
            <Image
              src={imageAbout}
              alt="sobre"
              width={400}
              height={400}
              className="w-[300px] lg:w-[400px] rounded-2xl dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
            />
          </Reveal>
        </div>
        <div className="flex items-center backdrop-blur-md dark:bg-[#192533]/30 bg-[#c4c4c4]/20 p-2 md:p-4 rounded-2xl mb-6 md:mb-0">
          <Reveal>
            <p className="text-[0.9rem] lg:text-[1rem] text-center lg:text-justify">
              Com mais de um ano dedicado aos estudos de Desenvolvimento
              Frontend, continuo em busca constante de desafios para aprimorar
              minhas habilidades. Meu foco está na construção de uma carreira
              como desenvolvedor frontend, especialmente com ênfase em React e
              Next.js. Tenho experiência comprovada na criação de interfaces de
              usuário atraentes, na aplicação rigorosa das melhores práticas de
              desenvolvimento e na construção de interfaces responsivas.
            </p>

            <p className="text-[0.9rem] lg:text-[1rem] mt-2 text-center lg:text-justify">
              Sou um candidato comprometido, habilidoso e persistente,
              valorizando a sinceridade e o comprometimento na colaboração em
              equipe. Meu objetivo é ingressar no mercado como desenvolvedor
              frontend, e meu repertório inclui proficiência em:{" "}
              {tecnologies.map((tech) => (
                <span
                  key={tech}
                  className="md:p-1 p-0 mr-2 text-sm bg-[#9bb3cb] text-black font-bold rounded-sm dark:shadow-[3px_3px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
                >
                  {tech}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </main>
    </div>
  );
};

export default About;
