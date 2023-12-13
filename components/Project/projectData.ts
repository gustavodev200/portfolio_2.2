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
  github2?: string;
  github3?: string;
  linkedin?: string;
};

export const projectData: ProjectData[] = [
  {
    id: randomUUID(),
    images: [
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702436541/portfolio/client_page_r22lxz.png",
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702436541/portfolio/my_schedules_lqjaw4.png",
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702436541/portfolio/Page_Agendamentos_ADMIN_vhpfif.png",
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702436541/portfolio/DASHBOARD_ADMIN_iepssl.png",
    ],
    title: "Hair Hub Barbershop - Projeto TCC",
    description:
      "Software desenvolvido como TCC simplifica o agendamento em barbearias, permitindo aos clientes escolher serviços, visualizar disponibilidade em tempo real e otimizar a gestão do tempo, com funcionalidades de cadastro e gerenciamento de clientes.",
    technologies: [
      "Next.js",
      "Ant Design",
      "Node.js",
      "JWT",
      "Express",
      "Typescript",
      "Recharts",
      "Prisma ORM",
      "Styled Components",
    ],
    github: "https://github.com/gustavodev200/TCC-HairHub-frontend",
    github2: "https://github.com/gustavodev200/TCC-HairHub-frontend-client",
    github3: "https://github.com/gustavodev200/TCC-HairHub-API",
  },

  {
    id: randomUUID(),
    images: [
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702439516/portfolio/Movies_Films_zgnjpw.png",
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702439516/portfolio/Movies_Films_-01_uwf9gp.png",
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702439516/portfolio/Movies_Films03_hj2ahr.png",
    ],
    title: "Movies GL - API themoviedb",
    description:
      "Elaborei um projeto inicial em React JS, fazendo uso da API themoviedb para exibir os filmes pesquisados diretamente na tela. Este trabalho foi realizado nos estágios iniciais do meu aprendizado em React e consumos de API com axios. Adicionalmente, o design do projeto foi concebido por mim, mantendo uma abordagem simples, porém funcional.",
    technologies: ["React", "Styled Components", "Javascript", "Axios"],
    github: "https://github.com/gustavodev200/movies-page",
    link: "https://moviespage-neon.vercel.app/",
  },
  {
    id: randomUUID(),
    images: [
      "https://res.cloudinary.com/hair-hub-barbershop/image/upload/v1702179920/portfolio/bingo_project_ct9jx6.png",
    ],
    title: "Collab Bingo - Open Source",
    description:
      "Trabalhei em um projeto com amigos, focado em aprender juntos e aprimorar nossas habilidades de trabalho em equipe. No projeto, eu era responsável por desenvolver algumas telas junto com outros colegas do time de front-end. Foi uma experiência legal de colaboração e crescimento mútuo.",
    technologies: ["Javascript", "EJS", "HTML", "CSS", "SASS"],
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
      "Trabalhamos em equipe para criar o frontend de um site de apresentação para uma clínica odontológica. Com a colaboração de Pedro Henrique no desenvolvimento e o Tiago Araújo no design, o projeto ganhou vida. Explore conosco esse site dedicado à apresentação da clínica odontológica, fruto de esforços conjuntos!",
    technologies: ["React", "Chackra UI", "Typescript"],
    github: "https://github.com/spaceowls/odonto_clean",
    link: "https://odonto-clean-beige.vercel.app/",
  },

  {
    id: randomUUID(),
    images: [
      "https://user-images.githubusercontent.com/76456239/210282909-1bd9d36a-f517-499b-b4e1-1c5451e511d0.png",
    ],
    title: "DEVMemory - Curso B7WEB",
    description:
      "Este projeto foi concebido como parte do curso B7WEB Fullstack, com o objetivo específico de aprimorar as habilidades em React JS e na lógica de desenvolvimento do jogo da memória. A iniciativa visava oferecer uma oportunidade prática para os participantes explorarem como um programador aborda a concepção e a implementação antes de iniciar o desenvolvimento.",
    technologies: ["React", "Styled Components", "Typescript", "Vite"],
    github: "https://github.com/gustavodev200/memory-game-react",
  },

  {
    id: randomUUID(),
    images: [
      "https://user-images.githubusercontent.com/76456239/209557629-6a371612-8860-494c-9f63-24a21932b5e8.png",
    ],
    title: "IMC Calculator - Curso B7WEB",
    description:
      "Desenvolvi um projeto envolvendo React e Typescript para criar uma calculadora de Índice de Massa Corporal (IMC). Esta aplicação visa proporcionar uma experiência interativa e prática, permitindo aos usuários calcular facilmente o IMC com precisão. O projeto foi desenvolvido durante o curso B7WEB que além de aprender as tecnólogias mostrou como seria a lógica por trás.",
    technologies: ["React", "CSS", "Typescript", "Vite"],
    github: "https://github.com/gustavodev200/react-calc-imc",
  },
];
