import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import Navigation from "./Navigation";

const ChildHead: FC = () => {
  return (
    <>
      <Box
        as="header"
        fontSize="2rem"
        fontFamily="font2"
        textAlign="center"
        padding="32px 0 8px"
      >
        <Box as="h1">
          <Text
            as="a"
            href="/"
            fontWeight="normal"
            opacity="1"
            transition="0.2s opacity"
          >
            YOSHIO INOUE
          </Text>
        </Box>
      </Box>
      <Navigation />
      <Box w="100vw" h="200px" bg="#eee"></Box>
    </>
  );
};

export default ChildHead;
