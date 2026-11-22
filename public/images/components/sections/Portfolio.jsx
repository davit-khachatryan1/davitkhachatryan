"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { HiX } from "react-icons/hi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import Pipeline from "../Pipeline";
import covers from "../covers";
import { projectsData } from "../../utils/constants";

const ALL = "All";
const LAST_CATEGORY = "AI Agents/Automations"; // tab sits after the existing categories

const ProjectCover = ({ project }) => {
  const Cover = covers[project.cover];
  return <Cover alt={project.coverAlt} />;
};

const ProjectModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const sections = [
    ["The problem", project.problem],
    ["How it works", project.howItWorks],
    ["Under the hood", project.underTheHood],
  ];

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
          {project.cover ? (
            <ProjectCover project={project} />
          ) : (
            <Image
              src={`/images/${project.image}.png`}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 900px) 100vw, 860px"
            />
          )}
        </div>
        <div className="modal__content">
          <span className="badge">{project.category}</span>
          <h3 id="project-modal-title" className="modal__title">
            {project.title}
          </h3>
          <p>{project.pitch || project.description}</p>
          {sections.map(([heading, items]) =>
            items ? (
              <section className="modal__section" key={heading}>
                <h4>{heading}</h4>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null
          )}
          {project.pipeline && (
            <section className="modal__section">
              <h4>Pipeline</h4>
              <Pipeline steps={project.pipeline} />
            </section>
          )}
          {project.cover && <h4 className="modal__stack-title">Tech stack</h4>}
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

  const categories = useMemo(() => {
    const found = [...new Set(projectsData.map((project) => project.category))];
    return [ALL, ...found.filter((c) => c !== LAST_CATEGORY), ...found.filter((c) => c === LAST_CATEGORY)];
  }, []);
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
                {project.cover ? (
                  <span className="project__cover">
                    <ProjectCover project={project} />
                  </span>
                ) : (
                  <Image
                    src={`/images/${project.image}.png`}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
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
