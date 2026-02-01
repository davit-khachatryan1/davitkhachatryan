"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  Heading,
  HStack,
  useRadioGroup,
  Center,
  Box,
} from "@chakra-ui/react";
import RadioCard from "../../components/RadioCards";
import { projectsData } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Projects = () => {
  const [selectedData, setSelectedData] = useState(projectsData);
  const valSelectFn = (value) =>
    setSelectedData(() => {
      return value === "ALL"
        ? projectsData
        : projectsData.filter((data) => data.type === value);
    });
  const options = ["ALL", "WEB-APP"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "project",
    defaultValue: "ALL",
    onChange: valSelectFn,
  });
  const group = getRootProps();

  return (
    <Center className="projects-page">
      <Box className="projects-shell" w="100%" maxW="1120px" px={{ base: 5, md: 8 }}>
        <Heading className="sub-heading" size="md" my={3}>
          PROJECTS
        </Heading>

        <Box {...group} className="projects-filter">
          <HStack className="projects-filter__stack">
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
        </Box>
        <RevealWrapper delay={300}>
          <Box className="projects-grid">
            {selectedData.map((data, index) => {
              return <ProjectCard {...{ data, index }} key={index} />;
            })}
          </Box>
        </RevealWrapper>
      </Box>
    </Center>
  );
};

export default Projects;
