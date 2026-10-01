import SectionTitle from "../SectionTitle";
import Reveal from "../Reveal";
import { servicesData } from "../../utils/constants";

const Services = () => (
  <section id="services" className="section section--light">
    <div className="container">
      <SectionTitle backdrop="Services" title="What I Do?" />
      <div className="services">
        {servicesData.map(({ title, icon: Icon, description }, index) => (
          <Reveal className="service" key={title} delay={(index % 2) * 0.1}>
            <span className="service__icon">
              <Icon />
            </span>
            <div>
              <h3 className="service__title">{title}</h3>
              <p className="service__text">{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
