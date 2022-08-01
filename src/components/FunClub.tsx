import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

const FunClub: FC = () => {
  return (
    <Box
      as="a"
      href="https://yoshioinoue.com/pc/index.html"
      target="page"
      display="block"
      w="100vw"
      h="304px"
      bg="url('https://manami-sato.github.io/practice-site_2/src/img/fc.png')"
      bgSize="110% auto"
      bgPosition="left center"
      bgRepeat="no-repeat"
      m="120px 0 0"
      p="104px 10vw 0"
      pos="relative"
      transition="0.2s background"
      textShadow="0 0 24px 0,0,0,0.8"
      sx={{
        "&::before": {
          content: "''",
          display: "block",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          background:
            "linear-gradient( to right, #000 0%, #000 10%, transparent 90% )",
          opacity: 0.4,
        },
        "&::after": {
          content: "''",
          display: "block",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          background:
            "linear-gradient( to right, transparent 0%, transparent 10%, #000 90% )",
          transition: "0.2s opacity",
          opacity: 0.4,
        },
      }}
      _hover={{
        "&::after": {
          opacity: 0,
        },
      }}
    >
      <Text
        as="h2"
        color="white"
        fontSize="2.5rem"
        fontFamily="font2"
        fontWeight="normal"
        pos="relative"
        zIndex="3"
      >
        YOSHIO INOUE Official Fun Club
      </Text>
      <Text
        color="secondary"
        fontSize="1.6rem"
        fontWeight="bold"
        m="16px 0 0"
        pos="relative"
        zIndex="3"
      >
        入会受付中
      </Text>
    </Box>
  );
};

export default FunClub;
