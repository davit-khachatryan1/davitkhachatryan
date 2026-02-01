import { useEffect } from "react";
import { useDisclosure, Flex, IconButton, VStack } from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";
import { IoMdMenu } from "react-icons/io";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { links } from "../utils/constants";

export default function MobileHeader({ pathname }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        aria-label="Open navigation menu"
        icon={<IoMdMenu size="22px" />}
        className="mobile-menu-btn"
        variant="unstyled"
      />

      <DrawerComponent
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        title="Menu"
      >
        <VStack alignItems="left" w="100%">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="drawer-nav-link"
              _hover={{ textDecoration: "none" }}
              my={2}
              color={pathname === link.path ? "blueTheme.navLinkActive" : undefined}
              aria-current={pathname === link.path ? "page" : undefined}
            >
              {link.text}
            </Link>
          ))}
        </VStack>
      </DrawerComponent>
    </Flex>
  );
}
