import { Box, Flex, Hide, Show } from "@chakra-ui/react";

import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import CloudIcon from "../resources/icons/CloudIconWhite.svg";
import DesktopNavigation from "./DesktopNavigation";

const navigation = [
  { title: "home", url: "#home" },
  { title: "about", url: "#about" },
  { title: "gallery", url: "#gallery" },
  { title: "pricing", url: "#pricing" },
  { title: "reviews", url: "#reviews" },
  { title: "order now", url: "#orderNow" },
];

export default function Header({ data }) {
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
      <Hide above="lg">
        <MobileNavigation navigation={navigation} data={data} />
      </Hide>
      <Show above="lg">
        <DesktopNavigation navigation={navigation} />
      </Show>
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
