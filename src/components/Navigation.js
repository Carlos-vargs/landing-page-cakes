import { Link, Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import React from "react";

export default function Navigation({ nav }) {
  return (
    <Flex
      as="nav"
      display={["none", "none", "none", "flex", "flex"]}
      alignItems="center"
      justifyContent="center"
      fontFamily="heading"
      fontSize="19px"
      height="56px"
      textTransform="capitalize"
    >
      <UnorderedList listStyleType="none" display="inline-flex">
        {nav.map((element, key) => (
          <ListItem
            key={key}
            color="charlestonGreen.900"
            _hover={{ color: "candyPink.900" }}
            marginInline="20px"
          >
            <Link href={element.url} textDecoration="none !important">
              {element.title}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}
