import { Text, Flex } from "@chakra-ui/react";
import { NextPage } from "next";

const FirstView: NextPage = () => {
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="center"
      w="100vw"
      h="80vh"
      bg="url('https://manami-sato.github.io/practice-site_2/src/img/fv.png')	no-repeat"
      bgSize="cover"
      bgPosition="center center"
      p="0 30vw 0 0"
      pos="relative"
    >
      <Text
        color="white"
        fontSize="5rem"
        fontWeight="normal"
        fontFamily="$font2"
        mixBlendMode="difference"
      >
        YOSHIO INOUE
      </Text>
    </Flex>
  );
};

export default FirstView;
