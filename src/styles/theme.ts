import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    xs: "280px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  colors: {
    gray: {
      "100": "#999EA3",
      "200": "#D1D8E5",
      "300": "#EAEAEA",
      "400": "#FAFAFA",
      "500": "#667080",
    },
    blue: {
      "100": "#002D6E",
      "200": "#00DFFB",
    },
    orange: {
      "100": "#FFA726",
      "200": "#D7842C",
    },
    white: {
      "100": "#FFFFFF",
    },
    black: {
      "100": "#202223",
    },
    red: {
      "100": "#E03131",
    },
    yellow: {
      "100": "#FFA726",
    },
    green: {
      "100": "#37B24D",
    },
    error: {
      "100": "#E53E3E",
    },
  },
  fonts: {
    heading: `Roboto`,
    body: `Roboto`,
  },
  styles: {
    global: {
      body: {
        bg: "white.100",
        color: "black.100",
      },
    },
  },
});
