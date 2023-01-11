import { useState } from "react";
import { Flex, Link, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import ContainerSocialNetworks from "./ContainerSocialNetwokrs";
import MenuIcon from "../resources/icons/MenuIcon";
import "../styles/navHeader.css";
import "animate.css";

export default function MobileNavigation({ navigation, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sizeTop, setSizeTop] = useState(90);

  function handleClick() {
    if (isOpen) {
      setIsOpen(!isOpen);
    } else {
      setSizeTop(90);
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      <MenuIcon onClick={handleClick} isOpen={isOpen} />
      <Stack
        visibility={isOpen ? "visible" : "hidden"}
        top={`${sizeTop}px`}
        transition="all .3s ease"
        className={`animate__animated ${
          isOpen ? "animate__fadeInUpBig" : "animate__fadeOutDownBig"
        }`}
        width="full"
        paddingBlockStart={["26%", "26%", "20%", "0", "0"]}
        backgroundColor="candyPink.900"
        zIndex="3"
        left="0"
        position="absolute"
        height="100vh"
        cursor="pointer"
        fontSize="28px"
        fontFamily="heading"
        textColor="white"
        textAlign="center"
      >
        <Stack
          as="nav"
          alignItems="center"
          justifyContent="center"
          color="white"
          textTransform="capitalize"
        >
          <UnorderedList listStyleType="none" marginInline="0">
            {navigation.map((element, key) => (
              <ListItem
                key={key}
                paddingInline="20px"
                className={`animate__animated ${
                  isOpen && "animate__fadeInUp animate__delay-1s"
                } `}
                height="56px"
                onClick={handleClick}
              >
                <Link
                  href={element.url}
                  className="active"
                  position="relative"
                  textDecoration="none !important"
                >
                  {element.title}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Stack>
        <Flex
          justifyContent="center"
          gridGap="14px"
          marginBlockStart="24px !important"
        >
          <ContainerSocialNetworks />
        </Flex>
        <Flex
          fontSize="13px"
          lineHeight="1.4rem"
          marginBlockStart="28px !important"
          justifyContent="center"
          whiteSpace="pre-wrap"
        >
          {data.copyRight} <br />
          {data.dev}
        </Flex>
      </Stack>
    </>
  );
}
