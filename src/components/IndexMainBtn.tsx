import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { BtnType } from "../types/BtnType";

const IndexMainBtn: FC<BtnType> = ({ link, name }) => {
  return (
    <Box
      as="a"
      href={link}
      target="page"
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="max-content"
      minW="280px"
      h="64px"
      bg="primary"
      color="#fff"
      fontSize="1.7rem"
      fontFamily="font2"
      fontWeight="bold"
      m={0}
      p="0 56px"
      transition="0.2s background"
      _hover={{
        background: "secondary",
        cursor: "pointer",
      }}
    >
      {name}
    </Box>
  );
};

export default IndexMainBtn;
