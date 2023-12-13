export const getTechnologyColor = (technology: string): string => {
  switch (technology) {
    case "React":
      return "#61dafb";
    case "Node.js":
      return "#8cc84b";
    case "Typescript":
      return "#007acc";
    case "Next.js":
      return "#787878";
    case "Tailwind CSS":
      return "#06b6d4";
    case "Vite":
      return "#646cff";
    case "Javascript":
      return "#FFD133";
    case "HTML":
      return "#e34c26";
    case "CSS":
      return "#563d7c";
    case "EJS":
      return "#b7b7b7";
    case "SASS":
      return "#cc6699";
    case "Ant Design":
      return "#1890ff";
    case "Express.js":
      return "#61dafb";
    case " Prisma ORM":
      return "#4c51bf";
    case "Recharts":
      return "#06b6d4";
    case "JWT":
      return "#646cff";
    case "Styled Components":
      return "#e26db9";
    case "Axios":
      return "#61dafb";
    default:
      return "#9bb3cb";
  }
};
