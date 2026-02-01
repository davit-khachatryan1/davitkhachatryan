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
    "Front-end",
    "React/Next.js",
    "TypeScript",
    "AI",
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
                  alt="Davit Khachatryan - Front-end Developer and Web3 Specialist"
                  className="about-portrait"
                />
                <Text className="about-portrait-meta">
                  Front-end / UI / Web3
                </Text>
              </Box>

              <Box className="about-hero-card">
                <Text className="about-kicker">Front-end developer</Text>
                <Box className="about-copy">
                  <Heading size="xl" className="about-title">
                    👋 Hey there
                  </Heading>
                  <Text className="about-paragraph">
                    I&apos;m <span className="name">Davit</span>, a Front-End Developer with over 5 years of experience building high-performance, responsive, and user-centric web applications. A forward-thinking developer who excels at <span className="tech">AI-assisted development</span>, leveraging <span className="tech">AI-enhanced</span> workflows to optimize code quality, accelerate delivery cycles, and drive informed technical decisions.
                  </Text>

                  <Text className="about-paragraph">
                    Proven expertise in delivering polished UI and scalable front-end architectures through seamless API integrations and close collaboration with cross-functional teams. Experienced in implementing Web3 features, including multi-wallet support and secure transaction pipelines, with a focus on intuitive user states and robust error handling. Committed to shipping end-to-end features that combine technical excellence with a superior user experience.
                  </Text>

                  <Box className="about-tags">
                    {focusTags.map((tag) => (
                      <Text as="span" className="about-tag" key={tag}>
                        {tag}
                      </Text>
                    ))}
                  </Box>
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
