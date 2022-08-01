import { Box } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import NewsType from "../types/NewsType";

const IndexNewsList: FC = () => {
  const [products, setProducts] = useState<NewsType[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/news`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <Box
      as="ul"
      display="flex"
      alignItems="center"
      flexDirection="column"
      width="70vw"
      maxWidth="800px"
    >
      {products.splice(0, 5).map((item, i) => (
        <Box as="li" key={i}>
          <Box
            as="a"
            href={
              "/" +
              item.link +
              "#" +
              item.date.year +
              item.date.month +
              item.date.day +
              i
            }
            display="flex"
            lineHeight="3rem"
            _hover={{
              textDecoration: "underline",
            }}
          >
            <span>{item.date.year + "/"}</span>
            <span>{item.date.month + "/"}</span>
            <span>{item.date.day + ""}</span>
            <p>{item.ttl}</p>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default IndexNewsList;
