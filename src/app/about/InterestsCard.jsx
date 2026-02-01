"use client"
import React from "react";
import { Box, Card, Heading, Icon } from "@chakra-ui/react";

const InterestsCard = ({ interest, icon }) => {
  
  return (
    <Card
      className="interest-card"
      alignItems="center"
      cursor="pointer"
    >
      <Box className="interest-icon">
        <Icon as={icon} boxSize="22px" />
      </Box>
      <Heading size="sm">{interest}</Heading>
    </Card>
  );
};

export default InterestsCard;
