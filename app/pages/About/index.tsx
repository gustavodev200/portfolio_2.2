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
    <div className="w-full h-[100vh] flex flex-col" id="about">
      <TitlePage text="Sobre" />

      <main className="grid md:grid-cols-2 mt-[4rem]">
        <div>
          <Reveal>
            <Image
              src={imageAbout}
              alt="sobre"
              width={400}
              height={400}
              className="rounded-2xl dark:shadow-[5px_5px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
            />
          </Reveal>
        </div>
        <div className="flex items-center backdrop-blur-md dark:bg-[#192533]/30 bg-[#c4c4c4]/20 p-4 rounded-2xl">
          <Reveal>
            <p className="text-justify ">
              Com mais de um ano dedicado aos estudos de Desenvolvimento
              Frontend, continuo em busca constante de desafios para aprimorar
              minhas habilidades. Meu foco está na construção de uma carreira
              como desenvolvedor frontend, especialmente com ênfase em React e
              Next.js. Tenho experiência comprovada na criação de interfaces de
              usuário atraentes, na aplicação rigorosa das melhores práticas de
              desenvolvimento e na construção de interfaces responsivas.
            </p>

            <p className="mt-2 text-justify ">
              Sou um candidato comprometido, habilidoso e persistente,
              valorizando a sinceridade e o comprometimento na colaboração em
              equipe. Meu objetivo é ingressar no mercado como desenvolvedor
              frontend, e meu repertório inclui proficiência em:{" "}
              {tecnologies.map((tech) => (
                <span
                  key={tech}
                  className="p-1 mr-2 text-sm  bg-[#9bb3cb] text-black font-bold rounded-sm dark:shadow-[3px_3px_0px_0px_rgba(257,257,257)] shadow-[5px_5px_0px_0px_rgba(000,000,000,0.2)]"
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
