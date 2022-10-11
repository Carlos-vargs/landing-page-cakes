import React from "react";
import { Flex, Stack, Text, Heading } from "@chakra-ui/layout";
import bgImageSection1 from "../../../resources/images/bgImageIce.jpg";
import { Button } from "@chakra-ui/react";

export default function Section1() {
  return (
    <Flex
      position="relative"
      backgroundImage={`url(${bgImageSection1})`}
      color="white"
      width="full"
      height="740px"
      backgroundAttachment="fixed"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      id="home"
    >
      <Stack
        justifyContent="center"
        marginInline="auto"
        alignItems={["center", "center", "center", "flex-start", "flex-start"]}
        textAlign={["center", "center", "left", "left", "left"]}
        paddingInline={[null, null, "60px", "128px", "128px"]}
        width={["300px", "300px", "400px", "100%", "100%"]}
        marginBlockStart={["0px", "0px", "0px", "-100px", "-100px"]}
      >
        <Heading
          as="h3"
          fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
          lineHeight="1.2em"
          zIndex="3"
        >
          Ice Cream <br /> Cakes
        </Heading>
        <Text
          fontSize="16px"
          lineHeight="30px"
          letterSpacing="0.2px"
          marginBlockEnd="36px !important"
        >
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry <br />
          with dummmy text. Graphics, Designing, Branding, Development
        </Text>
        <Button variant="outline">Learn More</Button>
      </Stack>
    </Flex>
  );
}
