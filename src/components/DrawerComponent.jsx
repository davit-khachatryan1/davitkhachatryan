import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function DrawerComponent({
  p = 15,
  placement = "right",
  width,
  isOpen,
  children,
  onClose,
  btnRef,
  title = "",
  footer,
}) {
  return (
    <Flex w={width}>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          alignItems="center"
          className="nav-drawer"
          bg="rgba(24, 30, 40, 0.95)"
          borderLeft="1px solid rgba(95, 196, 184, 0.18)"
          backdropFilter="blur(16px)"
        >
          <DrawerCloseButton alignSelf="end" mx={p} my={p} />
          <DrawerHeader my={p}>
            <Text as="p"> {title} </Text>
          </DrawerHeader>
          <DrawerBody className="nav-drawer__body">{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
