"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import SocialIcons from "./SocialIcons";
import { profile } from "../utils/constants";

const Sidebar = ({ links }) => {
  const [active, setActive] = useState(links[0]?.id);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    // A section counts as active once it crosses the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
  }, [isOpen]);

  return (
    <header className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
      <div className="sidebar__top">
        <a href="#home" className="sidebar__profile" onClick={() => setIsOpen(false)}>
          <span className="sidebar__avatar">
            <Image
              src="/images/profile.png"
              alt={`${profile.name} - ${profile.role}`}
              width={160}
              height={160}
              priority
            />
          </span>
          <span className="sidebar__name">{profile.name}</span>
        </a>
        <button
          type="button"
          className="sidebar__toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <nav className="sidebar__nav" aria-label="Main">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? "active" : undefined}
                aria-current={active === link.id ? "true" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SocialIcons className="sidebar__social" />
    </header>
  );
};

export default Sidebar;
