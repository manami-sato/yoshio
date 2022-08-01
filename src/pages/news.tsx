import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import NewsType from "../types/NewsType";
import { Spacer } from "../components/Spacer";
import ChildHead from "../components/ChildHead";
import ChildHeadline from "../components/ChildHeadline";
import ChildBtn from "../components/ChildBtn";
import FunClub from "../components/FunClub";
import Foot from "../components/Foot";
import { useState, useEffect } from "react";

let imgPath = "https://manami-sato.github.io/practice-site_2/src/img/";

const News: NextPage = () => {
  const [products, setProducts] = useState<NewsType[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/news`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <ChildHead />
      <Spacer size="64px" />
      <ChildHeadline ttl="NEWS" tab={false} />
      <Spacer size="64px" />
      <Flex
        as="ul"
        flexDirection="column"
        gap="48px"
        w="80vw"
        maxW="1000px"
        m="0 auto"
      >
        {products.map((item, i) => (
          <Box as="li" key={i}>
            <Box mb="8px">
              <Text
                fontSize="1.3rem"
                sx={{
                  span: {
                    "&::after": {
                      content: "'.'",
                    },
                    "&:last-of-type": {
                      mr: "12px",
                      "&::after": {
                        content: "''",
                      },
                    },
                  },
                }}
              >
                <Text as="span">{item.date.year}</Text>
                <Text as="span">{item.date.month}</Text>
                <Text as="span">{item.date.day}</Text>
              </Text>
              <Box as="h3" color="primary" fontSize="1.6rem" fontWeight="bold">
                {item.ttl}
              </Box>
            </Box>
            <Text mb="32px">{item.txt}</Text>
            <ChildBtn link="/" name="詳細はこちら" />
          </Box>
        ))}
      </Flex>
      <FunClub />
      <Foot />
    </>
  );
};

export default News;
