import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "orange.100",
        fontFamily: "Inter, sans-serif",
      },
    },
  },
});

export default theme;
