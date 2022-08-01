import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import adobeFonts from "../theme/adobefonts";
import { useEffect } from "react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: "#114480",
  secondary: "#ffa326",
  white: "#fff",
  black: "#5f5f5f",
};
const fonts = {
  font1: "adobe-handwriting-ernie, sans-serif",
  font2: "new-order, sans-serif",
};
const sizes = {
  maxData: "1000px",
  mt_indexMainBtn: "64px",
  mb_indexHeadline: "40px",
  mt_indexSection: "120px",
};
const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      fontSize: "62.5%",
    },
    "*": {
      margin: 0,
      padding: 0,
      // boxSizing: "border-box",
    },
    body: {
      color: "black",
      fontSize: "1.3rem",
      fontFamily: "sans-serif",
    },
    a: {
      color: "black",
      opacity: 1,
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
      },
    },
    li: {
      listStyleType: "none",
    },
    "::selection": {
      background: "rgba(0,0,0,0.05)",
      color: "secondary",
    },
    "::-moz-selection": {
      // firefox
      background: "rgba(0,0,0,0.05)",
      color: "secondary",
    },
  },
};

const theme = extendTheme({ styles, colors, sizes, fonts });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    adobeFonts(document);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
