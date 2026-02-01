import React from "react";
import { socialMediaLinks } from "../utils/constants";
import { Flex, Icon } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const SocialIcons = () => {
  return (
    <Flex
      className="social-icons"
      alignItems="center"
      justifyContent={["center", "center", "center"]}
    >
      {socialMediaLinks.map((linkData, index) => (
        <Link
          key={index}
          href={linkData.href}
          target={linkData.href.startsWith("mailto:") ? "_self" : "_blank"}
          rel={
            linkData.href.startsWith("mailto:")
              ? undefined
              : "noopener noreferrer"
          }
          className="social-icon"
          style={{
            "--brand": linkData.backgroundColor,
            "--brand-hover": linkData.hoverColor,
          }}
        >
          <Icon as={linkData.icon} />
        </Link>
      ))}
    </Flex>
  );
};

export default SocialIcons;
