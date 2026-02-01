"use client";
import React from "react";
import {
  Image,
  Heading,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";

const WorkCard = (props) => {
  const { company, duration, designation, companyImg, description } =
    props.data;
  const { index } = props;
  const isCurrent =
    typeof duration === "string" &&
    duration.toLowerCase().includes("present");
  return (
    <>
      <Box
        className="experience-card"
        style={{ "--delay": `${(index || 0) * 90}ms` }}
      >
        <Flex
          className="experience-card__inner"
          flexDirection={["column", "column", "row"]}
          alignItems={["flex-start", "flex-start", "flex-start"]}
          gap={{ base: 3, md: 4 }}
        >
          <Box className="experience-logo">
            <Image
              src={`/images/${companyImg}`}
              alt="Company Logo"
              objectFit="cover"
            />
          </Box>
          <Box className="experience-content">
            <Box className="experience-header">
              <Box>
                <Heading className="experience-title">{company}</Heading>
                <Text className="experience-role">{designation}</Text>
              </Box>
              <Box className="experience-meta">
                <Text className="experience-duration">{duration}</Text>
                {isCurrent && <Text className="experience-badge">Current</Text>}
              </Box>
            </Box>
            <Box className="experience-description">{description}</Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default WorkCard;
