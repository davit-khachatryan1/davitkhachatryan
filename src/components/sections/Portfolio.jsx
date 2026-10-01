"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { HiX } from "react-icons/hi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import { projectsData } from "../../utils/constants";

const ALL = "All";

const ProjectModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    // No close() in cleanup: it would fire onClose. Unmounting the dialog closes it.
    const dialog = dialogRef.current;
    if (!dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && onClose()}
    >
      <div className="modal__body">
        <button type="button" className="modal__close" aria-label="Close" onClick={onClose}>
          <HiX />
        </button>
        <div className="modal__image">
          <Image
            src={`/images/${project.image}.png`}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 900px) 100vw, 860px"
          />
        </div>
        <div className="modal__content">
          <span className="badge">{project.category}</span>
          <h3 id="project-modal-title" className="modal__title">
            {project.title}
          </h3>
          <p>{project.description}</p>
          <ul className="tags tags--small">
            {project.stacks.map((stack) => (
              <li className="tag" key={stack}>
                {stack}
              </li>
            ))}
          </ul>
          <div className="modal__actions">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Live site <FaExternalLinkAlt />
              </a>
            )}
            {project.source && (
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                Source <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState(null);

  const categories = useMemo(
    () => [ALL, ...new Set(projectsData.map((project) => project.category))],
    []
  );
  const projects =
    filter === ALL ? projectsData : projectsData.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="section section--light">
      <div className="container">
        <SectionTitle backdrop="Portfolio" title="My Work" />

        <div className="filters" role="tablist" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={filter === category}
              className={filter === category ? "active" : undefined}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ul className="portfolio">
          {projects.map((project) => (
            <li key={project.title}>
              <button type="button" className="project" onClick={() => setSelected(project)}>
                <Image
                  src={`/images/${project.image}.png`}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 576px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="project__overlay">
                  <span className="project__title">{project.title}</span>
                  <span className="project__category">{project.category}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Portfolio;
