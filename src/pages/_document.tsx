// pages/_document.js

import { ColorModeScript } from "@chakra-ui/react";
import config from "next/config";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
// import theme from "_app";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          {/* 👇 Here's the script */}
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
