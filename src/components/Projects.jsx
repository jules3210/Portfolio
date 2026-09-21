import ProjectCard from "./ProjectCard";
import { PROJECTS_LIST } from "./Data/projects";

function Projects() {
    return (
        <section id="projects" className="py-15 border-b-2 border-(--line)">
            <div className="flex justify-between items-baseline mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-serif">
                    Projets phares
                </h2>
                <span className="text-sm text-(--text-muted)">
          {PROJECTS_LIST.length} projets sélectionnés
        </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS_LIST.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
