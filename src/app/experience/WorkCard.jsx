"use client";
import React, { useState, useMemo } from "react";
import {
  Image,
  Heading,
  Text,
  Flex,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const WorkCard = (props) => {
  const { company, duration, designation, companyImg, description } =
    props.data;
  const { index } = props;
  const stacks = props.data.stacks || [];
  const isCurrent =
    typeof duration === "string" &&
    duration.toLowerCase().includes("present");
  
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Check if description has more than 2 list items
  const hasMore = useMemo(() => {
    if (!description || typeof description !== 'object' || !description.props) {
      return false;
    }
    
    const children = description.props.children;
    let listItems = [];
    
    // Handle Fragment with ul
    if (React.isValidElement(children) && children.type === 'ul') {
      const items = children.props.children;
      listItems = Array.isArray(items) ? items : [items];
    } else if (Array.isArray(children)) {
      // Handle array of children, find ul
      const ulElement = children.find(child => 
        React.isValidElement(child) && child.type === 'ul'
      );
      if (ulElement) {
        const items = ulElement.props.children;
        listItems = Array.isArray(items) ? items : [items];
      }
    }
    
    const validItems = listItems.filter(item => 
      item && React.isValidElement(item) && item.type === 'li'
    );
    
    return validItems.length > 2;
  }, [description]);

  return (
    <>
      <Box
        className="experience-card"
        style={{ "--delay": `${(index || 0) * 90}ms` }}
      >
        <Box className="experience-card__inner">
          <Box className="experience-logo">
            <Image
              src={`/images/${companyImg}`}
              alt={`${company} company logo - ${designation}`}
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
            <Box 
              className={`experience-description ${isExpanded ? 'expanded' : 'collapsed'}`}
            >
              {description}
            </Box>
            {hasMore && (
              <Box className="experience-expand-wrapper">
                <IconButton
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                  icon={isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="experience-expand-button"
                  variant="ghost"
                  size="sm"
                />
                <Text 
                  className="experience-expand-text"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Show Less" : "Show More"}
                </Text>
              </Box>
            )}
            {stacks.length > 0 && (
              <Box className="experience-stacks">
                <Text className="experience-stacks__title">Stacks & Tools</Text>
                <Box className="experience-stacks__list">
                  {stacks.map((stack) => (
                    <Text as="span" className="experience-stack-chip" key={stack}>
                      {stack}
                    </Text>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WorkCard;
