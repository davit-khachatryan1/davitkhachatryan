"use client";
import React from "react";
import {
  Heading,
  SimpleGrid,
  Image,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import InterestsCard from "./InterestsCard";
import { interestsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Page = () => {
  const focusTags = [
    "Full Stack",
    "React/Next.js",
    "TypeScript",
    "Node.js",
    "Web3",
  ];

  return (
    <>
      <Center className="about-page">
        <Box className="about-shell" w="100%" maxW="1120px" px={{ base: 5, md: 8 }}>
          <RevealWrapper className="load-hidden" id="about" delay={300}>
            <Heading className="sub-heading" size="md" my={3}>
              ABOUT
            </Heading>
            <SimpleGrid
              columns={[1, null, 2]}
              gap={{ base: 8, md: 12 }}
              fontSize="1.05rem"
              marginBottom="4rem"
              templateColumns={{ base: "1fr", md: "minmax(260px, 320px) 1fr" }}
              className="about-hero-grid"
            >
              <Box className="about-portrait-card">
                <Image
                  objectFit="cover"
                  src="/images/profile.png"
                  alt="profile-image"
                  className="about-portrait"
                />
                <Text className="about-portrait-meta">
                  Full stack / Web3 / UX
                </Text>
              </Box>

              <Box className="about-hero-card">
                <Text className="about-kicker">Full-stack developer</Text>
                <Box className="about-copy">
                  <Heading size="xl" className="about-title">
                    👋 Hey there
                  </Heading>
                  <Text className="about-paragraph">
                    I&apos;m <span className="name">Davit</span>, a passionate
                    software developer. I specialize in{" "}
                    <span className="tech">Full stack Development</span>,
                    crafting seamless user experiences and robust backend
                    solutions. With 5+ years of experience as a full-stack
                    developer, I specialize in creating modern, responsive, and
                    user-friendly web applications. My work has spanned a
                    variety of roles, from building fully customized websites
                    from scratch to contributing to live products used by
                    thousands. I excel in developing seamless user experiences
                    using React, Next.js, and TypeScript, complemented by
                    backend expertise in Node.js, Express.js, and databases like
                    MongoDB and PostgreSQL. I also have hands-on experience
                    with blockchain technologies, including integrating wallets,
                    and building Web3-powered applications.
                  </Text>

                  <Box className="about-tags">
                    {focusTags.map((tag) => (
                      <Text as="span" className="about-tag" key={tag}>
                        {tag}
                      </Text>
                    ))}
                  </Box>

                  <Text className="about-paragraph">
                    📫 Open to collaborations and exciting projects, I&apos;m
                    eager to connect with fellow developers and tech enthusiasts.
                    Let&apos;s build something amazing together!
                  </Text>
                  <Text className="about-signoff">Happy coding! 🖥️</Text>
                </Box>
              </Box>
            </SimpleGrid>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" id="interests" delay={600}>
            <Heading className="sub-heading" size="md" my={3}>
              INTERESTS
            </Heading>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
            >
              {interestsData.map((data, index) => {
                return (
                  <InterestsCard
                    interest={data.interest}
                    icon={data.icon}
                    key={index}
                  />
                );
              })}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Page;
