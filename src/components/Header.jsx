import { Flex, HStack, chakra } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import MobileHeader from "./MobileHeader";
import { links } from "../utils/constants";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <chakra.header
      id="header"
      className="site-header"
      pos="sticky"
      top={0}
      zIndex="100"
    >
      <Flex
        className="site-header__inner"
        w="100%"
        px={{ base: 4, md: 6 }}
        py={{ base: 3, md: 4 }}
        align="center"
        justify="space-between"
      >
        <Link
          href="/"
          className="logo-link"
          fontSize="lg"
          _hover={{
            textDecoration: "none",
            color: "blueTheme.navLinkActive",
            transition: "all .5s ease-in-out",
          }}
        >
          Davit Khachatryan {"</>"} {" "}
        </Link>

        <HStack
          as="nav"
          spacing="6"
          display={{ base: "none", md: "flex" }}
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`nav-link ${
                pathname === link.path ? "active-link" : ""
              }`}
              _hover={{ textDecoration: "none", color: "blueTheme.navLinkActive" }}
              aria-current={pathname === link.path ? "page" : undefined}
            >
              {link.text}
            </Link>
          ))}
        </HStack>
        <HStack>
          <MobileHeader {...{ pathname }} />
        </HStack>
      </Flex>
    </chakra.header>
  );
}
