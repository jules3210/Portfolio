import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
    const { title, slug, description, image, tags, githubUrl, liveUrl, featured } = project;

    return (
        <div
            className={`group flex flex-col overflow-hidden rounded-xl border border-(--line) bg-(--bg-card) transition hover:border-(--text-muted) ${
                featured ? "md:col-span-2" : ""
            }`}
        >
            <div className="flex items-center justify-between border-b border-(--line) px-4 py-2.5 bg-black/5 dark:bg-white/5">
                <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-xs text-(--text-muted)">
          ~/projects/{slug}
        </span>
            </div>

            <div className={`flex flex-col flex-1 ${featured ? "md:flex-row" : ""}`}>

                <div className={`overflow-hidden border-b border-(--line) ${featured ? "md:w-1/2 md:border-b-0 md:border-r" : ""}`}>
                    <img
                        src={image}
                        alt={`Aperçu du projet ${title}`}
                        className="h-50 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>

                <div className={`flex flex-col flex-1 p-6 ${featured ? "md:w-1/2" : ""}`}>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-sm text-(--text-muted) leading-relaxed mb-4">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-md border border-(--line) px-2.5 py-1 text-xs font-medium text-(--text-muted)"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm font-medium pt-4 border-t border-(--line)">
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-(--text-muted) hover:text-(--accent) transition"
                            >
                                <FaGithub className="text-base" /> GitHub
                            </a>
                        )}

                        {liveUrl ? (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-(--text-muted) hover:text-(--accent) transition"
                            >
                                <FaExternalLinkAlt className="text-xs" /> Démo
                            </a>
                        ): ""}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectCard;
