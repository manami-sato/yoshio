import { FC } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Foot: FC = () => {
  let imgPath = "https://manami-sato.github.io/practice-site_2/src/img/";
  let footBnrs = [
    {
      ttl: "グランアーツオフィシャルサイト",
      url: "https://www.grand-arts.com/",
      img: "foot_bnr_1.png",
    },
    {
      ttl: "グランアーツオフィシャルTwitter",
      url: "https://twitter.com/gran_arts",
      img: "foot_bnr_3.png",
    },
  ];
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      gap="48px"
      w="100vw"
      h="88px"
      p="0 8vw"
    >
      <Flex as="ul" gap="48px" h="56px">
        {footBnrs.map((item, i) => (
          <Box as="li" key={i}>
            <Box
              as="a"
              href={item.url}
              target="_blank"
              opacity="1"
              transition="0.2s opacity"
              _hover={{
                opacity: 0.5,
              }}
            >
              <Box
                as="img"
                src={imgPath + item.img}
                alt={item.ttl}
                // w="100%"
                h="100%"
                objectFit="contain"
              />
            </Box>
          </Box>
        ))}
      </Flex>
      <Text as="small">
        &copy; Grand-Arts.CO.,Ltd. All Rights Reserved
        無断転載は固くお断り致します。
      </Text>
    </Flex>
  );
};

export default Foot;
