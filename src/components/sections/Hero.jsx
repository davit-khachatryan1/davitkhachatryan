"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HiChevronDown } from "react-icons/hi";
import { profile } from "../../utils/constants";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      typedRef.current.textContent = profile.typedRoles[0];
      return;
    }
    const typed = new Typed(typedRef.current, {
      strings: profile.typedRoles,
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1600,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__content">
        <p className="hero__welcome">Welcome</p>
        <h1 className="hero__title">
          I&apos;m <span className="hero__typed" ref={typedRef} />
        </h1>
        <p className="hero__lead">
          I design scalable frontends and build LLM integrations, AI agents and
          MCP-based workflows for production products.
        </p>
        <ul className="hero__stack" aria-label="Focus areas">
          {profile.heroChips.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li className="hero__cert">{profile.certificationChip}</li>
        </ul>
        <a href="#contact" className="btn btn--outline">
          Hire Me
        </a>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <HiChevronDown />
      </a>
    </section>
  );
};

export default Hero;
