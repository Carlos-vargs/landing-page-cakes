import {
  Button,
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

export default function EventPricingCard({ cards, ...rest }) {
  return (
    <Stack
      paddingInline="40px"
      alignItems="center"
      textAlign="center"
      {...rest}
    >
      <Heading
        as="h3"
        borderBottom="dashed 1px #FFFFFF"
        fontSize="26px"
        textTransform="capitalize"
        paddingBlockEnd="4px"
      >
        {cards.category}
      </Heading>
      <Text paddingBlockStart="27px">
        Lorem dolor sit amet, consectetur <br />
        adipiscing elit.
      </Text>
      <Heading paddingBlockStart="24px" fontSize="38px" as="h6">
        ${cards.price}
        <Text as="span" fontSize="14px">
          /Per Event
        </Text>
      </Heading>
      <UnorderedList
        marginInlineStart="0 !important"
        styleType="none"
        paddingBlockStart="22px"
        spacing="16px"
      >
        {cards.services.map((service, key) => (
          <ListItem key={key}>{service}</ListItem>
        ))}
      </UnorderedList>
      <Flex
        justifyContent="center"
        marginBlockStart="34px"
        width="100px"
        marginInline="auto"
      >
        <Button variant="outline" height="30px" textTransform="capitalize">
          choose
        </Button>
      </Flex>
    </Stack>
  );
}
