import { Project } from "@/components/Project";
import { projectData } from "@/components/Project/projectData";
import TitlePage from "@/components/TitlePage";
import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-auto flex flex-col z-20 mb-20" id="projects">
      <TitlePage text="Projetos" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mt-[4rem]">
        {projectData.map((project) => (
          <Project.Root key={project.id} {...project}>
            <Project.Image imageUrl={project.images} />
            <Project.Title title={project.title} />
            <Project.Description description={project.description} />
            <Project.Technologies technologies={project.technologies} />
          </Project.Root>
        ))}
      </div>
    </div>
  );
};

export default Projects;
