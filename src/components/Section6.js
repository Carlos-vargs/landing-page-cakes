import { Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import bgImageSection6 from "../resources/images/bgImageIce6.jpg";
import EventPricingCard from "./EventPricingCard";

const cards = {
  standard: {
    category: "standard",
    price: "36",
    services: [
      "Party Decoration",
      "Design Cake",
      "Home Delivery",
      "Ballon Decoration",
    ],
  },
  premium: {
    category: "premium",
    price: "56",
    services: [
      "Decoration",
      "Wedding Cakes",
      "Waiter Service",
      "Flower Decoration",
    ],
  },
};

export default function Section6() {
  return (
    <Flex
      position="relative"
      backgroundImage={`url(${bgImageSection6})`}
      color="white"
      width="full"
      as="section"
      paddingBlock="120px"
      height={["auto", "auto", "auto", "740px", "740px"]}
      backgroundAttachment="fixed"
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      id="pricing"
      justifyContent={["center", "center", "center", "center", "flex-end"]}
      className="smt"
      paddingInline={["16px", "16px", "16px", "116px", "116px"]}
    >
      <Stack alignItems="center" textAlign="center">
        <Heading as="h3" fontSize="3rem" color="white">
          Event Pricing
        </Heading>
        <SimpleGrid gridRowGap="40px" columns={[1, 1, 1, 2, 2]}>
          <EventPricingCard
            cards={cards.standard}
            borderRight={[
              "none",
              "none",
              "none",
              "dashed 1px white",
              "dashed 1px white",
            ]}
          />
          <EventPricingCard cards={cards.premium} />
        </SimpleGrid>
      </Stack>
    </Flex>
  );
}
