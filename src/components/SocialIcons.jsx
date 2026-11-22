import { socialMediaLinks } from "../utils/constants";

const SocialIcons = ({ className = "" }) => (
  <ul className={`social-icons ${className}`}>
    {socialMediaLinks.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          <Icon />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialIcons;
