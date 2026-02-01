"use client";
import React from "react";
import WorkCard from "./WorkCard";
import { Heading, Center, Box } from "@chakra-ui/react";
import { workData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Work = () => {
  return (
    <>
      <Center className="experience-page">
        <Box className="experience-shell" w="100%" maxW="1040px" px={{ base: 5, md: 8 }}>
          <Heading className="sub-heading" size="md" my={3}>
            EXPERIENCE
          </Heading>
          <RevealWrapper className="load-hidden" delay={300}>
            <Box className="experience-list">
              {workData.map((data, index) => {
                return <WorkCard {...{ data, index }} key={index} />;
              })}
            </Box>
          </RevealWrapper>
        </Box>
      </Center>
    </>
  );
};

export default Work;
