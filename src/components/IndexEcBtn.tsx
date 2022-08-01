import { Flex } from "@chakra-ui/react";
import { FC } from "react";

const IndexMainBtn: FC = () => {
  return (
    <Flex
      as="a"
      href="https://shop.grand-arts.com/"
      target="_blank"
      justifyContent="center"
      alignItems="center"
      w="max-content"
      minW="104px"
      h="40px"
      bg="transparent"
      borderColor="primary"
      borderStyle="solid"
      borderWidth="3px"
      color="primary"
      fontFamily="font2"
      fontWeight="bold"
      m={0}
      p="0 40px"
      transition="0.2s background,0.2s color,0.2s border-color"
      _hover={{
        color: "white",
        background: "secondary",
        borderColor: "secondary",
        cursor: "pointer",
      }}
    >
      オンラインショップへ
    </Flex>
  );
};

export default IndexMainBtn;
