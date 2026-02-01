"use client";
import React, { useState } from "react";
import {
  Image,
  Text,
  Link,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Badge,
  VStack,
  HStack,
  Box,
  Divider,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaLink, FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  const { title, image, link, source, description, stacks, type } = props.data;
  const { index } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const linkHover = {
    fill: "blueTheme.navLinkActive",
    transition: "all ease-in-out 0.5s",
  };
  const visibleStacks = stacks.slice(0, 4);
  const extraStackCount = Math.max(stacks.length - visibleStacks.length, 0);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <Box
        className="project-tile"
        style={{ "--delay": `${(index || 0) * 80}ms` }}
        onClick={handleCardClick}
      >
        <Box className="project-tile__image">
          <Image
            objectFit="cover"
            src={`images/${image}.png`}
            alt="project-img"
            loading="lazy"
          />
          <Box className="project-tile__type">{type}</Box>
        </Box>
        <Box className="project-tile__body">
          <Box className="project-tile__header">
            <Text className="project-tile__title">{title}</Text>
            <HStack className="project-tile__actions">
              {link && (
                <Link
                  as="a"
                  href={link}
                  target="_blank"
                  onClick={handleLinkClick}
                  className="project-action"
                  aria-label="Open live project"
                >
                  <Icon as={FaLink} _hover={linkHover} />
                </Link>
              )}
              {source && (
                <Link
                  as="a"
                  href={source}
                  target="_blank"
                  onClick={handleLinkClick}
                  className="project-action"
                  aria-label="Open source code"
                >
                  <Icon as={FaGithub} _hover={linkHover} />
                </Link>
              )}
            </HStack>
          </Box>
          <Text className="project-tile__desc" noOfLines={3}>
            {description}
          </Text>
          <Wrap className="project-tile__chips">
            {visibleStacks.map((tech, techIndex) => (
              <WrapItem key={techIndex}>
                <Badge className="project-chip" variant="unstyled">
                  {tech}
                </Badge>
              </WrapItem>
            ))}
            {extraStackCount > 0 && (
              <WrapItem>
                <Badge className="project-chip" variant="unstyled">
                  +{extraStackCount}
                </Badge>
              </WrapItem>
            )}
          </Wrap>
        </Box>
      </Box>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl" isCentered>
        <ModalOverlay backdropFilter="blur(8px)" bg="rgba(18, 22, 30, 0.7)" />
        <ModalContent className="project-modal">
          <ModalHeader className="project-modal__header">
            <HStack spacing={4} align="center">
              <Box className="project-modal__thumb">
                <Image
                  src={`images/${image}.png`}
                  alt="project-img"
                  objectFit="cover"
                />
              </Box>
              <VStack align="start" spacing={1}>
                <Text className="project-modal__title">{title}</Text>
                <Badge className="project-modal__type" variant="unstyled">
                  {type}
                </Badge>
              </VStack>
            </HStack>
          </ModalHeader>

          <ModalCloseButton className="project-modal__close" />

          <ModalBody className="project-modal__body">
            <VStack spacing={6} align="stretch">
              <Box className="project-modal__section">
                <Text className="project-modal__section-title">
                  Project Description
                </Text>
                <Text className="project-modal__section-text">
                  {description}
                </Text>
              </Box>

              <Divider className="project-modal__divider" />

              <Box className="project-modal__section">
                <Text className="project-modal__section-title">
                  Technology Stack
                </Text>
                <Wrap className="project-modal__stack" spacing={3}>
                  {stacks.map((tech, stackIndex) => (
                    <WrapItem key={stackIndex}>
                      <Badge className="project-modal__chip" variant="unstyled">
                        {tech}
                      </Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>

              <Divider className="project-modal__divider" />
            </VStack>
          </ModalBody>

          <ModalFooter className="project-modal__footer">
            <HStack spacing={3} className="project-modal__actions">
              {link && (
                <Button
                  as="a"
                  href={link}
                  target="_blank"
                  className="project-modal__cta"
                  variant="unstyled"
                >
                  Live Demo
                </Button>
              )}
              {source && (
                <Button
                  as="a"
                  href={source}
                  target="_blank"
                  className="project-modal__ghost"
                  variant="unstyled"
                >
                  Source Code
                </Button>
              )}
              <Button
                className="project-modal__ghost"
                variant="unstyled"
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectCard;
