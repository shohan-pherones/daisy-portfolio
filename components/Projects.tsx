import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <div id="projects" className="wrapper">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card card-compact bg-base-100 w-full shadow-xl"
          >
            <figure className="h-60">
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <p className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span key={index + tool} className="badge badge-outline">
                    {tool}
                  </span>
                ))}
              </p>
              <div className="card-actions">
                <Link
                  target="_blank"
                  href={project.links.live}
                  className="btn btn-primary"
                >
                  Live Link
                </Link>
                {project.links.front && (
                  <Link
                    target="_blank"
                    href={project.links.front}
                    className="btn btn-secondary"
                  >
                    Front-End Link
                  </Link>
                )}
                {project.links.back && (
                  <Link
                    target="_blank"
                    href={project.links.back}
                    className="btn btn-accent"
                  >
                    Back-End Link
                  </Link>
                )}
                {project.links.full && (
                  <Link
                    target="_blank"
                    href={project.links.full}
                    className="btn btn-info"
                  >
                    Full-Stack Link
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="" target="_blank" className="btn btn-outline">
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default Projects;
