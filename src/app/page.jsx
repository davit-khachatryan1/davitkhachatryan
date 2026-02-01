"use client";
import { useEffect, useRef, useCallback } from "react";
import { Heading, Flex, Center, Image, Box, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Typed from "typed.js";
import SocialIcons from "../components/SocialIcons";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../particlesjs.json";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const typedTextRef = useRef(null);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        "Front-end JavaScript Developer",
      ],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Center className="home-hero__wrapper">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleConfig}
          position="absolute"
          zIndex={0}
        />
        <Flex className="home-hero" zIndex={1}>
          <RevealWrapper className="load-hidden" delay={300}>
            <Box className="home-hero__avatar">
              <Image
                objectFit="cover"
                src="/images/ar-profile-transformed.png"
                alt="Davit Khachatryan - Front-end Developer Portfolio"
              />
            </Box>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={400}>
            <Text className="home-hero__eyebrow">Hi, my name is</Text>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={500}>
            <Heading className="home-hero__name">
              Davit <span className="home-hero__name-accent">Khachatryan</span>
            </Heading>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={600}>
            <Text className="home-hero__typing">
              I&apos;m <span className="typed-text" ref={typedTextRef}></span>
            </Text>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={700}>
            <Text className="home-hero__subtitle">
              Building scalable web experiences with modern stacks and Web3
              tooling.
            </Text>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={800}>
            <Flex className="home-hero__cta">
              <Link href="/projects" className="home-cta home-cta--primary">
                View Projects
              </Link>
              <Link href="/resume" className="home-cta home-cta--ghost">
                Resume
              </Link>
            </Flex>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={900}>
            <SocialIcons />
          </RevealWrapper>
        </Flex>
      </Center>
    </>
  );
}
