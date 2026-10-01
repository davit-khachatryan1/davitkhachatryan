import { FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SectionTitle from "../SectionTitle";
import Reveal from "../Reveal";
import WorkCard from "./WorkCard";
import {
  certificationsData,
  educationData,
  profile,
  skillIcons,
  skillsGroups,
  volunteeringData,
  workData,
} from "../../utils/constants";

const Resume = () => (
  <section id="resume" className="section section--dark">
    <div className="container">
      <SectionTitle backdrop="Summary" title="Resume" />

      <div className={`resume ${educationData.length ? "resume--split" : ""}`}>
        {educationData.length > 0 && (
          <div>
            <h3 className="resume__heading">My Education</h3>
            <div className="resume__list">
              {educationData.map((item) => (
                <Reveal key={item.title}>
                  <article className="resume-card">
                    <span className="badge">{item.duration}</span>
                    <h4 className="resume-card__title">{item.title}</h4>
                    <p className="resume-card__place">{item.place}</p>
                    {item.description && (
                      <p className="resume-card__text">{item.description}</p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>

            <h3 className="resume__heading resume__heading--spaced">Volunteering</h3>
            <div className="resume__list">
              {volunteeringData.map((item) => (
                <Reveal key={item.date}>
                  <article className="resume-card">
                    <span className="badge">{item.date}</span>
                    <h4 className="resume-card__title">{item.role}</h4>
                    <p className="resume-card__place">{item.event}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="resume__heading">My Experience</h3>
          <div className="resume__list">
            {workData.map((item) => (
              <Reveal key={item.company}>
                <WorkCard data={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <h3 className="resume__heading resume__heading--section">Certifications</h3>
      <ul className="certs">
        {certificationsData.map((cert, index) => (
          <Reveal
            as="li"
            key={cert.name}
            className={`cert ${cert.featured ? "cert--featured" : ""}`}
            delay={(index % 3) * 0.08}
          >
            <HiOutlineBadgeCheck className="cert__icon" aria-hidden="true" />
            <div>
              <h4 className="cert__name">{cert.name}</h4>
              <p className="cert__issuer">{cert.issuer}</p>
              {cert.url && (
                <a
                  className="cert__link"
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify <FaExternalLinkAlt aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </ul>

      <h3 className="resume__heading resume__heading--section">My Skills</h3>
      <div className="skills">
        {skillsGroups.map((group, index) => (
          <Reveal className="skills__group" key={group.title} delay={(index % 2) * 0.1}>
            <h4 className="skills__title">{group.title}</h4>
            <ul className="tags">
              {group.items.map((item) => {
                const Icon = skillIcons[item];
                return (
                  <li className="tag" key={item}>
                    {Icon && <Icon aria-hidden="true" />}
                    {item}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="text-center">
        <a href={profile.cv} className="btn btn--outline" download>
          Download CV
        </a>
      </div>
    </div>
  </section>
);

export default Resume;
