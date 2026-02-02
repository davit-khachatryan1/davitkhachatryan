"use client";
import { useEffect, useRef, useState } from "react";
import { Box, Icon } from "@chakra-ui/react";
import { skillsData } from "../utils/constants";

// Color mapping for tech stack icons (brand colors)
const iconColors = {
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  Javascript: "#F7DF1E",
  Typescript: "#3178C6",
  SASS: "#CC6699",
  Bootstrap: "#7952B3",
  ReactJS: "#61DAFB",
  NextJS: "#000000",
  Redux: "#764ABC",
  NodeJs: "#339933",
  VueJS: "#4FC08D",
  Nuxt: "#00DC82",
  Angular: "#DD0031",
  "React Native": "#61DAFB",
  Express: "#000000",
  Postgres: "#336791",
  MongoDB: "#47A248",
  Postman: "#FF6C37",
  Git: "#F05032",
  Github: "#181717",
  ChatGPT: "#10A37F",
  Bash: "#4EAA25",
  "Web3.js": "#F16822",
  "Ethers.js": "#627EEA",
  Wagmi: "#6366F1",
  Ethereum: "#627EEA",
  Solana: "#9945FF",
};

const ICON_SIZE = 60;
const START_OFFSET = ICON_SIZE + 20;
const BOTTOM_MARGIN = 30;
const FALL_DURATION = 3;

const FloatingStackIcons = () => {
  const [icons, setIcons] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initializeIcons = () => {
      const iconSize = ICON_SIZE;
      let spacing = 70; // Space between icons
      const bottomMargin = BOTTOM_MARGIN; // Margin from bottom
      let totalWidth = skillsData.length * spacing;
      
      // Adjust spacing if icons don't fit
      if (totalWidth > window.innerWidth - 40) {
        spacing = Math.max(50, (window.innerWidth - 40) / skillsData.length);
        totalWidth = skillsData.length * spacing;
      }
      
      const startX = Math.max(20, (window.innerWidth - totalWidth) / 2);
      
      // Initialize icons - arrange them at the bottom in a row
      const initializedIcons = skillsData.map((skill, index) => {
        const finalX = startX + index * spacing;
        const finalY = window.innerHeight - iconSize - bottomMargin;
        const startOffset = START_OFFSET + Math.random() * 80;
        const fallDelay = Math.random() * 2.8; // Wider stagger for clearly random starts
        const fallDuration = FALL_DURATION + (Math.random() * 1.8 - 0.9); // 2.1s - 3.9s
        
        return {
          id: index,
          name: skill.name,
          IconComponent: skill.icon,
          startOffset,
          finalX,
          finalY,
          isDragging: false,
          dragOffset: { x: 0, y: 0 },
          fallDelay,
          fallDuration,
          hasLanded: false,
          fallDistance: finalY + startOffset, // Distance from start to final position
          color: iconColors[skill.name] || "rgba(95, 196, 184, 0.8)", // Default color if not found
        };
      });

      setIcons(initializedIcons);

      // Icons will be marked as landed via onAnimationEnd event for smoother transition
    };

    initializeIcons();

    // Handle window resize - reposition icons at bottom
    const handleResize = () => {
      const iconSize = ICON_SIZE;
      let spacing = 70;
      const bottomMargin = BOTTOM_MARGIN;
      let totalWidth = skillsData.length * spacing;
      
      // Adjust spacing if icons don't fit
      if (totalWidth > window.innerWidth - 40) {
        spacing = Math.max(50, (window.innerWidth - 40) / skillsData.length);
        totalWidth = skillsData.length * spacing;
      }
      
      const startX = Math.max(20, (window.innerWidth - totalWidth) / 2);
      
      setIcons((prevIcons) =>
        prevIcons.map((icon, index) => ({
          ...icon,
          finalX: startX + index * spacing,
          finalY: window.innerHeight - iconSize - bottomMargin,
          fallDistance: window.innerHeight - iconSize - bottomMargin + icon.startOffset,
        }))
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e, iconId) => {
    e.preventDefault();
    e.stopPropagation();
    const icon = icons.find((i) => i.id === iconId);
    if (!icon || !icon.hasLanded) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    setIcons((prevIcons) =>
      prevIcons.map((i) =>
        i.id === iconId
          ? {
              ...i,
              isDragging: true,
              dragOffset: { x: offsetX, y: offsetY },
              hasLanded: true, // Stop animation when dragging starts
            }
          : i
      )
    );
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const draggingIcon = icons.find((icon) => icon.isDragging);
      if (!draggingIcon) return;

      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          if (icon.isDragging) {
            const newX = e.clientX - icon.dragOffset.x - ICON_SIZE / 2;
            const newY = e.clientY - icon.dragOffset.y - ICON_SIZE / 2;
            
            // Keep icons within window bounds
            const constrainedX = Math.max(0, Math.min(newX, window.innerWidth - ICON_SIZE));
            const constrainedY = Math.max(0, Math.min(newY, window.innerHeight - ICON_SIZE));
            
            return {
              ...icon,
              finalX: constrainedX,
              finalY: constrainedY,
            };
          }
          return icon;
        })
      );
    };

    const handleMouseUp = () => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => ({
          ...icon,
          isDragging: false,
        }))
      );
    };

    if (icons.some((icon) => icon.isDragging)) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [icons]);

  // Inject dynamic styles for each icon's animation
  useEffect(() => {
    if (typeof document === "undefined" || icons.length === 0) return;

    const styleId = "floating-icons-styles";
    let styleElement = document.getElementById(styleId);
    
    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    const keyframes = icons
      .map(
        (icon) => `
      @keyframes fallDown${icon.id} {
        0% {
          transform: translate(0, -${icon.fallDistance}px);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        100% {
          transform: translate(0, 0);
          opacity: 1;
        }
      }
    `
      )
      .join("\n");

    styleElement.textContent = `
      .floating-icon {
        will-change: transform;
      }
      .floating-icon.falling {
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
      }
      .floating-icon.landed {
        opacity: 1 !important;
        will-change: auto;
      }
      ${keyframes}
    `;

    return () => {
      // Cleanup on unmount
      const element = document.getElementById(styleId);
      if (element) {
        element.remove();
      }
    };
  }, [icons]);

  return (
    <Box
      ref={containerRef}
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      pointerEvents="none"
      zIndex={2}
      overflow="hidden"
    >
      {icons.map((icon) => {
        const IconComponent = icon.IconComponent;
        const isFalling = !icon.hasLanded && !icon.isDragging;
        
        return (
          <Box
            key={icon.id}
            className={`floating-icon ${isFalling ? "falling" : ""} ${icon.hasLanded ? "landed" : ""}`}
            position="absolute"
            left={`${icon.finalX}px`}
            top={`${icon.finalY}px`}
            width={`${ICON_SIZE}px`}
            height={`${ICON_SIZE}px`}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor={icon.hasLanded ? (icon.isDragging ? "grabbing" : "grab") : "default"}
            pointerEvents={icon.hasLanded ? "auto" : "none"}
            transition={icon.isDragging ? "none" : icon.hasLanded ? "top 0.1s linear, left 0.2s ease-out, transform 0.1s linear" : "none"}
            onMouseDown={(e) => handleMouseDown(e, icon.id)}
            onAnimationEnd={(e) => {
              if (!icon.hasLanded && !icon.isDragging) {
                // Mark as landed immediately when animation completes
                setIcons((prevIcons) =>
                  prevIcons.map((i) =>
                    i.id === icon.id
                      ? {
                          ...i,
                          hasLanded: true,
                        }
                      : i
                  )
                );
              }
            }}
            style={
              isFalling
                ? {
                    transform: `translateY(-${icon.fallDistance}px)`,
                    opacity: 0,
                    animation: `fallDown${icon.id} ${icon.fallDuration}s linear ${icon.fallDelay}s forwards`,
                  }
                : icon.hasLanded
                ? {
                    transform: "none",
                    opacity: 1,
                  }
                : {}
            }
          >
            <Icon
              as={IconComponent}
              width="40px"
              height="40px"
              color={icon.color}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default FloatingStackIcons;
