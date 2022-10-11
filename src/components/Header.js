import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import NavigationMobile from "./NavigationMobile";
import CloudIcon from "../resources/icons/CloudIconWhite.svg";
import Navigation from "./Navigation";

const nav = [
  { title: "home", url: "#home" },
  { title: "about", url: "#about" },
  { title: "gallery", url: "#gallery" },
  { title: "pricing", url: "#pricing" },
  { title: "reviews", url: "#reviews" },
  { title: "order now", url: "#orderNow" },
];

export default function Header({ copyRight, dev, socialNetworks }) {
  return (
    <Flex
      justifyContent="space-between"
      as="header"
      width="full"
      alignItems="center"
      top="0"
      height="90px"
      zIndex="5"
      position="sticky"
      backgroundColor="white"
      paddingInline={["20px", "20px", "30px", "46px", "46px"]}
    >
      <Logo width={"116px"} height={"66px"} />
      <Navigation data={nav} />
      <NavigationMobile
        data={nav}
        copyRight={copyRight}
        dev={dev}
        socialNetworks={socialNetworks}
      />
      <Box
        as="figure"
        bgRepeat="repeat-x"
        width="full"
        height="60px"
        left="0"
        top="52px"
        zIndex="5"
        position="absolute"
        backgroundImage={`url(${CloudIcon})`}
      />
    </Flex>
  );
}