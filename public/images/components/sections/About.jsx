import SectionTitle from "../SectionTitle";
import Reveal from "../Reveal";
import Counter from "./Counter";
import { profile, statsData } from "../../utils/constants";

const focusTags = ["TypeScript", "JavaScript", "LLM Integrations", "AI Agents", "MCP"];

const About = () => (
  <section id="about" className="section section--dark">
    <div className="container">
      <SectionTitle backdrop="About Me" title="Know Me More" />

      <div className="about">
        <Reveal className="about__bio">
          <h3 className="about__heading">
            I&apos;m <span className="text-primary">Davit Khachatryan</span>, a{" "}
            {profile.role}
          </h3>
          <p>
            Frontend engineer with deep expertise in TypeScript, JavaScript, and
            React — I think in systems: clear data flows, scalable component
            architecture, and interfaces that hold together under real
            complexity. Over five years I have designed and owned complete
            production frontends, from the first architectural decision to the
            moment something ships.
          </p>
          <p>
            I communicate clearly, work hard, and genuinely enjoy learning new
            technologies and putting them into practice. That mindset led me
            early into <strong>AI engineering</strong> — building{" "}
            <strong>LLM integrations</strong>, developing{" "}
            <strong>AI agents</strong>, and implementing{" "}
            <strong>MCP-based workflows</strong> in production products. My
            experience spans Web3 platforms, fintech, and enterprise publishing
            systems.
          </p>
          <ul className="tags">
            {focusTags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="about__info" delay={0.15}>
          <ul>
            <li>
              <span>Name:</span> {profile.name}
            </li>
            <li>
              <span>Email:</span>{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Role:</span> {profile.role}
            </li>
            <li>
              <span>From:</span> {profile.location}
            </li>
            <li>
              <span>Languages:</span> {profile.languages.join(" · ")}
            </li>
          </ul>
          <a href={profile.cv} className="btn btn--primary" download>
            Download CV
          </a>
        </Reveal>
      </div>

      <ul className="stats">
        {statsData.map((stat) => (
          <li key={stat.label} className="stats__item">
            <strong className="stats__value">
              <Counter value={stat.value} suffix={stat.suffix} />
            </strong>
            <span className="stats__label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
