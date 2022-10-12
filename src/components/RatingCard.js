import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import StarIcon from "../resources/icons/StarIcon";
import imageProfile from "../resources/images/profileReview.jpg";

export default function RatingCard({ data }) {
  return (
    <Stack
      borderRadius="2xl"
      boxShadow="lg"
      alignItems="center"
      backgroundColor="white"
      height="280px"
      maxWidth="374px"
      minWidth="300px"
      position="relative"
      paddingBlockStart="30px"
      paddingInline="26px"
    >
      <Text color="charlestonGreen.900" textAlign="center" lineHeight="30px">
        {data.description}
      </Text>
      <Text
        as="time"
        display="block"
        marginBlockStart="20px"
        textAlign="center"
        dateTime={new Date(data.created_at)}
        color="charlestonGreen.900"
        fontSize="14px"
        marginInline="auto"
      >
        <i>{data.created_at}</i>
      </Text>
      <Flex
        color="charlestonGreen.900"
        width="100px"
        gridGap="4px"
        marginInline="auto"
        marginBlockStart="20px"
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} />
        ))}
      </Flex>
      <Image
        objectFit="cover"
        boxShadow="lg"
        border="solid 1px white"
        position="absolute"
        borderRadius="full"
        height="120px"
        width="120px"
        backgroundColor="red.100"
        bottom="-46px"
        transform="translateX(-50%)"
        left="50%"
        src={imageProfile}
      />
    </Stack>
  );
}
