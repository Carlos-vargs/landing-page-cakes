import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import CloudIcon from "../resources/icons/CloudIcon.svg";
import ContainerSocialNetworks from "./ContainerSocialNetwokrs";
import Logo from "./Logo";

export default function Footer({ data }) {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      width="full"
      paddingBlock="120px"
      backgroundColor="candyPink.900"
      position="relative"
    >
      <Box
        as="figure"
        backgroundRepeat="repeat-x"
        width="full"
        height="60px"
        top="-28px"
        transform="rotate(180deg)"
        position="absolute"
        backgroundImage={`url(${CloudIcon})`}
      />
      <Stack objectFit="cover" alignItems="center">
        <Logo
          width={["116px", "116px", "130px", "200px", "200px"]}
          height={["66px", "66px", "70px", "120px", "120px"]}
          variant="white"
        />
        <Stack marginBlockStart="46px !important">
          <Flex gridGap="18px" justifyContent="center">
            <ContainerSocialNetworks />
          </Flex>
          <Text
            textAlign="center"
            fontSize="14px"
            color="white"
            lineHeight="1.4rem"
            marginBlockStart="28px !important"
            justifyContent="center"
            whiteSpace="pre-wrap"
          >
            {data.copyRight} <br />
            {data.dev}
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}
