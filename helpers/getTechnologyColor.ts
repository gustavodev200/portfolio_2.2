export const getTechnologyColor = (technology: string): string => {
  switch (technology) {
    case "React":
      return "#61dafb";
    case "Node.js":
      return "#8cc84b";
    case "Typescript":
      return "#007acc";
    case "Next.js":
      return "#000000";
    case "Tailwind CSS":
      return "#06b6d4";
    case "Vite":
      return "#646cff";
    case "JavaScript":
      return "#f0db4f";
    case "HTML":
      return "#e34c26";
    case "CSS":
      return "#563d7c";
    case "EJS":
      return "#b7b7b7";

    default:
      return "#9bb3cb";
  }
};
