import { extendTheme } from "@chakra-ui/react";
import fonts from "./foundations/fonts";
import colors from "./foundations/colors";
import fontSizes from "./foundations/fontSizes";
import breakpoints from "./foundations/breakpoints";
import Button from "./components/Button";

const overrides = {
  fonts,
  colors,
  fontSizes,
  components: {
    Button,
  },
  breakpoints,
};

export default extendTheme(overrides);
