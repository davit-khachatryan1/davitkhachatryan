import { FaEnvelope, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import SectionTitle from "../SectionTitle";
import SocialIcons from "../SocialIcons";
import ContactForm from "./ContactForm";
import { profile } from "../../utils/constants";

const Contact = () => (
  <section id="contact" className="section section--light">
    <div className="container">
      <SectionTitle backdrop="Contact" title="Get in Touch" />
      <div className="contact">
        <div className="contact__info">
          <h3 className="contact__heading">Let&apos;s work together</h3>
          <p>
            Open to frontend and applied AI engineering roles and projects.
            Based in {profile.location}; reach out through any channel below.
          </p>
          <ul className="contact__list">
            <li>
              <FaEnvelope aria-hidden="true" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <FaTelegramPlane aria-hidden="true" />
              <a href="https://t.me/DavitKhachatryan" target="_blank" rel="noopener noreferrer">
                @DavitKhachatryan
              </a>
            </li>
            <li>
              <FaLinkedin aria-hidden="true" />
              <a
                href="https://www.linkedin.com/in/davitkhachatryan11/"
                target="_blank"
                rel="noopener noreferrer"
              >
                davitkhachatryan11
              </a>
            </li>
          </ul>
          <h3 className="contact__heading contact__heading--small">Follow Me</h3>
          <SocialIcons className="social-icons--large" />
        </div>
        <div>
          <h3 className="contact__heading">Send Me a Note</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
