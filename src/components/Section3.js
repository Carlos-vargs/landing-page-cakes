import React from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import bgImageSection3 from "../resources/images/bgImageIce3.jpg";
import PercentageCircle from "./PercentageCircle";

const ourSpeciality = [
  {
    name: "wedding cakes",
    percentage: 80,
  },
  {
    name: "chocolate fudge cake",
    percentage: 90,
  },
  {
    name: "macrons",
    percentage: 60,
  },
];

export default function Section3() {
  return (
    <Flex
      as="section"
      position="relative"
      backgroundImage={`url(${bgImageSection3})`}
      color="white"
      width="full"
      className="smt"
      height={["auto", "auto", "auto", "740px", "740px"]}
      backgroundAttachment="fixed"
      backgroundPosition={["center", "center", "center", "inherit", "inherit"]}
      backgroundSize="cover"
      paddingBlock="120px"
      paddingInline={["0", "0", "0", "116px", "116px"]}
    >
      <Stack
        textTransform="capitalize"
        textAlign={["center", "center", "center", "left", "left"]}
        marginInline={["auto", "auto", "auto", "0", "0"]}
      >
        <Text
          as="span"
          color="white"
          fontFamily="heading"
          fontSize="body"
          lineHeight="1.2"
        >
          45+ year of experience
        </Text>
        <Heading as="h2" color="white" fontSize="40px">
          our speciality
        </Heading>
        <Flex
          justifyContent="center"
          paddingBlockStart="74px"
          gridGap="12px"
          flexWrap="wrap"
        >
          {ourSpeciality.map((speciality, key) => (
            <PercentageCircle
              key={key}
              title={speciality.name}
              percentage={speciality.percentage}
            />
          ))}
        </Flex>
      </Stack>
    </Flex>
  );
}
