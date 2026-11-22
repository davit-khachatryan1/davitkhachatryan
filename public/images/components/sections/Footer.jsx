import { profile } from "../../utils/constants";

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p>
        Copyright © {new Date().getFullYear()}{" "}
        <a href="#home">{profile.name}</a>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
