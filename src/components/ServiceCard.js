import React from "react";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import ArrowRightIcon from "../resources/icons/ArrowRightIcon";

export default function ServiceCard({ title, description, icon, ...rest }) {
  return (
    <Stack
      {...rest}
      height="222px"
      width="236px"
      border="solid 2px"
      borderColor="candyPink.900"
      borderRadius="3xl"
      boxShadow="lg"
      transition="all 0.3s ease"
      cursor="pointer"
      _hover={{
        backgroundColor: "candyPink.900",
        "&>div": {
          backgroundColor: "white",
          color: "candyPink.900",
        },
      }}
      paddingBlockStart="18px"
      marginBlock="0 !important"
      justifyContent="flex-start"
      alignItems={["center", "center", "center", "flex-start", "flex-start"]}
      paddingInline="26px"
    >
      <Flex
        transition="all 0.3s ease"
        borderRadius="full"
        width="56px"
        height="56px"
        backgroundColor="candyPink.900"
        color="white"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="30px" height="30px">
          {icon}
        </Box>
      </Flex>
      <Heading
        as="h5"
        marginBlockStart="12px !important "
        textTransform="capitalize"
        fontSize="20px"
      >
        {title}
      </Heading>
      <Text
        marginBlockStart="16px"
        fontSize="12px"
        lineHeight="24px"
        textAlign={["center", "center", "center", "left", "left"]}
      >
        {description}
      </Text>
      <Box
        as="span"
        width="18px"
        height="18px"
        marginInlineStart="auto !important"
        marginBlock="auto 20px !important"
      >
        <ArrowRightIcon />
      </Box>
    </Stack>
  );
}
