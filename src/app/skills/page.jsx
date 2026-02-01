"use client";
import React from "react";
import {
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { skillsGroups } from "../../utils/constants";
import { RevealWrapper } from "next-reveal";

const Skills = () => {
  return (
    <Box className="skills-page">
      <Box className="skills-shell" w="100%" maxW="1120px" px={{ base: 5, md: 8 }}>
        <Heading className="sub-heading" size="md" my={3}>
          SKILLS
        </Heading>
        <RevealWrapper className="load-hidden" delay={400}>
          <Box className="skills-groups">
            {skillsGroups.map((group) => (
              <Box key={group.title} className="skills-group">
                <Box>
                  <Text className="skills-group-title">{group.title}</Text>
                  <Text className="skills-group-caption">{group.caption}</Text>
                </Box>
                <Box className="skills-pills">
                  {group.items.map((item) => (
                    <Text key={item} as="span" className="skill-pill">
                      {item}
                    </Text>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </RevealWrapper>
      </Box>
    </Box>
  );
};

export default Skills;
