import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { BtnType } from "../types/BtnType";

const ChildBtn: FC<BtnType> = ({ link, name, flag }) => {
  return (
    <Box
      as="a"
      href={link}
      target="page"
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="136px"
      h="48px"
      color="#fff"
      fontFamily="font2"
      fontWeight="bold"
      m={0}
      transition="0.2s background"
      _hover={{
        background: "secondary",
        cursor: "pointer",
      }}
      style={
        flag
          ? {
              background: "tomato",
            }
          : { background: "skyblue" }
      }
    >
      {name}
    </Box>
  );
};

export default ChildBtn;
