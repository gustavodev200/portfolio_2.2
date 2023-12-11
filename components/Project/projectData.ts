import { randomUUID } from "crypto";
import { ReactNode } from "react";
import { IoLogoJavascript } from "react-icons/io5";
type ProjectData = {
  id: string;
  images: string[];
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  linkedin?: string;
};

export const projectData: ProjectData[] = [
  {
    id: randomUUID(),
    images: [
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702179920/portfolio/bingo_project_ct9jx6.png",
    ],
    title: "Collab Bingo - Open Source",
    description:
      "Trabalhei em um projeto com amigos, focado em aprender juntos e aprimorar nossas habilidades de trabalho em equipe. No projeto, eu era responsável por desenvolver algumas telas junto com outros colegas do time de front-end. Foi uma experiência legal de colaboração e crescimento mútuo.",
    technologies: ["Javascript", "React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/spaceowls/collab-bingo",
  },

  {
    id: randomUUID(),
    images: [
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702179904/portfolio/odonto1_project_hofhxe.png",
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702183089/portfolio/odonto02_ka64dq.png",
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702183089/portfolio/odonto3_h747fz.png",
    ],
    title: "Odonto Clean - Open Source",
    description:
      "Trabalhei em um projeto com amigos, focado em aprender juntos e aprimorar nossas habilidades de trabalho em equipe. No projeto, eu era responsável por desenvolver algumas telas junto com outros colegas do time de front-end. Foi uma experiência legal de colaboração e crescimento mútuo.",
    technologies: [
      "Javascript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Node.js",
    ],
    github: "https://github.com/spaceowls/collab-bingo",
  },

  {
    id: randomUUID(),
    images: [
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702179920/portfolio/bingo_project_ct9jx6.png",
    ],
    title: "Collab Bingo - Open Source",
    description:
      "Trabalhei em um projeto com amigos, focado em aprender juntos e aprimorar nossas habilidades de trabalho em equipe. No projeto, eu era responsável por desenvolver algumas telas junto com outros colegas do time de front-end. Foi uma experiência legal de colaboração e crescimento mútuo.",
    technologies: ["Javascript", "React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/spaceowls/collab-bingo",
  },

  {
    id: randomUUID(),
    images: [
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702179920/portfolio/bingo_project_ct9jx6.png",
    ],
    title: "Collab Bingo - Open Source",
    description:
      "Trabalhei em um projeto com amigos, focado em aprender juntos e aprimorar nossas habilidades de trabalho em equipe. No projeto, eu era responsável por desenvolver algumas telas junto com outros colegas do time de front-end. Foi uma experiência legal de colaboração e crescimento mútuo.",
    technologies: ["Javascript", "React", "Next.js", "Tailwind CSS"],
    github: "https://github.com/spaceowls/collab-bingo",
  },
];
