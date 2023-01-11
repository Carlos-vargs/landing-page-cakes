import { Link, Flex, UnorderedList, ListItem } from "@chakra-ui/react";

export default function DesktopNavigation({ navigation }) {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="center"
      fontFamily="heading"
      fontSize="19px"
      height="56px"
      textTransform="capitalize"
    >
      <UnorderedList listStyleType="none" display="inline-flex">
        {navigation.map((element, key) => (
          <ListItem
            key={key}
            color="charlestonGreen.900"
            _hover={{ color: "candyPink.900" }}
            marginInline="20px"
          >
            <Link
              href={element.url}
              _focusVisible={{ color: "candyPink.900", boxShadow: "outline" }}
              textDecoration="none !important"
            >
              {element.title}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}
