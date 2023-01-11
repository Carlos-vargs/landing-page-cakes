import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import ArrowRightIcon from "../resources/icons/ArrowRightIcon";
import "../styles/ButtonBlob.css";

export default function ServiceCard({ title, description, icon, ...rest }) {
  return (
    <Stack
      {...rest}
      className="blob-btn"
      height="222px"
      width="236px"
      zIndex="1"
      position="relative"
      _before={{
        zIndex: 1,
        left: 0,
        top: 0,
        border: "2px solid",
        borderColor: "candyPink.900",
        position: "absolute",
        content: `""`,
        width: "full",
        height: "full",
        borderRadius: "3xl",
        boxShadow: "lg",
      }}
      cursor="pointer"
      _hover={{
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
      <Box
        as="span"
        zIndex="-1"
        overflow="hidden"
        position="absolute"
        left="0"
        top="0"
        transform="rotate(180deg)"
        width="full"
        height="full"
        borderRadius="3xl"
        background="transparent"
      >
        <Box
          position="relative"
          display="block"
          height="full"
          filter="url(#splash)"
        >
          {[1, 2, 3, 4].map((index) => (
            <Box
              as="span"
              key={index}
              className="blob-btn__blob"
              backgroundColor="candyPink.900"
            ></Box>
          ))}
        </Box>
      </Box>
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
