import { Box, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import GridGoods from "./GridGoods";
import GoodsType from "../types/GoodsType";

const IndexGoodeList: FC = () => {
  const [products, setProducts] = useState<GoodsType[]>([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/goods`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <Box
      as="ul"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexWrap="wrap"
      gap="40px"
      width="90vw"
    >
      <GridGoods item={products.find((item) => item.style === "Album")} />
      <GridGoods item={products.find((item) => item.style === "DVD")} />
      <GridGoods item={products.find((item) => item.style === "Book")} />
    </Box>
  );
};

export default IndexGoodeList;
