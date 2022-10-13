import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/react";

import logoWithWhiteLetters from "../resources/images/newlogo2.png";
import logoWithBlackLetters from "../resources/images/newlogo3.png";

export default function Logo({ width, height, variant = "black", ...rest }) {
  return (
    <Box as="figure" objectFit="cover" {...rest}>
      {variant === "white" ? (
        <Image src={logoWithBlackLetters} width={width} height={height} />
      ) : (
        <Image src={logoWithWhiteLetters} width={width} height={height} />
      )}
    </Box>
  );
}
