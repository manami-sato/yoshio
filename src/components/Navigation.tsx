import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

const Navigation: FC = () => {
  let items = [
    { link: "/news", name: "News", target: "page", id: "news" },
    { link: "/media", name: "Media", target: "page", id: "media" },
    { link: "/goods", name: "CD/DVD/Goods", target: "page", id: "goods" },
    {
      link: "https://www.grand-arts.com/artist/inoueyoshio.html",
      name: "Profile",
      target: "_blank",
      id: "profile",
    },
    {
      link: "http://yoshioinoue.com/",
      name: "Funclub",
      target: "_blank",
      id: "funclub",
    },
  ];
  return (
    <Box
      as="nav"
      w="80vw"
      maxW="maxData"
      h="72px"
      m="0 auto"
      fontSize="1.6rem"
      fontFamily="font2"
    >
      <Flex
        as="ul"
        h="100%"
        justifyContent="center"
        alignItems="center"
        gap="8vw"
      >
        {items?.map((item, i) => (
          <Box
            as="li"
            key={i}
            sx={{
              "&:nth-of-type(3)": {
                "&::after": {
                  content: '"/"',
                  margin: "0 0 0 8vw",
                },
              },
            }}
          >
            <Box
              as="a"
              transition="0.2s opacity"
              _hover={{ opacity: "0.4" }}
              href={item.link}
              target={item.target}
            >
              {item.name}
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Navigation;
