import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import GoodsType from "../types/GoodsType";

let imgPath = "https://manami-sato.github.io/practice-site_2/src/img/";

export type GoodsProps = {
  item: GoodsType | undefined;
};

const Goods: FC<GoodsProps> = ({ item }) => {
  if (item === undefined) return <p>コンテンツが存在しません</p>;
  return (
    <Box
      as="li"
      display="flex"
      alignItems="center"
      flexDirection="column"
      w="calc(256px + 24px * 2)"
      bg="transparent"
      p="32px 24px"
      transition="0.2s background"
      _hover={{
        background: "rgba(0,0,0,0.08)",
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        w="256px"
        h="256px"
        boxShadow="0 0 16px rgba(0,0,0,0.25)"
      >
        <Box
          as="img"
          src={imgPath + item.edition[0].img + ".jpeg"}
          alt={item.ttl}
          w="100%"
          h="100%"
          objectFit="contain"
        />
      </Flex>
      <Flex
        margin="24px 0 8px"
        alignItems="center"
        sx={{
          span: {
            "&::after": {
              content: "'.'",
            },
            "&:last-of-type": {
              "&::after": {
                content: "''",
              },
            },
          },
        }}
      >
        <Flex
          as="p"
          alignItems="center"
          bg="secondary"
          w="max-content"
          h="32px"
          mr="8px"
          p="0 16px"
          fontSize="1.3rem"
        >
          {item.style}
        </Flex>
        <Text as="span">{item.date.year}</Text>
        <Text as="span">{item.date.month}</Text>
        <Text as="span">{item.date.day}</Text>
        <Text as="span">Release</Text>
      </Flex>
      <Text as="h3" h="max-height" fontSize="1.5rem" fontWeight="bold">
        {item.ttl}
      </Text>
    </Box>
  );
};

export default Goods;
