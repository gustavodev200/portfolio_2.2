import { Project } from "@/components/Project";
import { projectData } from "@/components/Project/projectData";
import TitlePage from "@/components/TitlePage";
import { Github, Globe } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <section
      className="w-full h-auto flex flex-col z-20 mb-20 md:p-10 lg:p-10 xl:p-0"
      id="projects"
    >
      <TitlePage text="Projetos" />

      <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 mt-[1.5rem]">
        {projectData.map((project) => (
          <Project.Root key={project.id} {...project}>
            <Project.Image imageUrl={project.images} />
            <Project.Title title={project.title} />
            <Project.Description description={project.description} />
            <Project.Technologies technologies={project.technologies} />

            <Project.ActionsContainer>
              {project.link ? (
                <Project.Links
                  text="Link"
                  icon={<Globe />}
                  link={project.link as string}
                />
              ) : null}

              <Project.Links
                text="Github"
                icon={<Github />}
                link={project.github as string}
              />

              {project.github2 ? (
                <Project.Links
                  text="Github Client"
                  icon={<Github />}
                  link={project.github2 as string}
                />
              ) : null}

              {project.github3 ? (
                <Project.Links
                  text="Github API"
                  icon={<Github />}
                  link={project.github3 as string}
                />
              ) : null}
            </Project.ActionsContainer>
          </Project.Root>
        ))}
      </main>
    </section>
  );
};

export default Projects;
