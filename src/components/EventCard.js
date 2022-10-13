import { Stack, Text, Heading, Flex } from "@chakra-ui/react";

export default function EventCard({ icon, count, title }) {
  return (
    <Stack
      justifyContent="center"
      textAlign="center"
      textTransform="capitalize"
      cursor="pointer"
      borderRadius="full"
      alignItems="center"
      height="160px"
      width="160px"
      padding="20px"
      transition="all .5s ease"
      _hover={{
        backgroundColor: "white",
        "&>div,h4,p": {
          color: "charlestonGreen.900",
        },
      }}
    >
      <Flex width="30px" height="30px">
        {icon}
      </Flex>
      <Heading as="h4" fontSize="30px">
        {count}
      </Heading>
      <Text>{title}</Text>
    </Stack>
  );
}
