import { filter, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { GoodsType } from "../../types/NewsType";
import { Spacer } from "../../components/Spacer";
import ChildHead from "../../components/ChildHead";
import ChildHeadline from "../../components/ChildHeadline";
import GridGoods from "../../components/GridGoods";
import FunClub from "../../components/FunClub";
import Foot from "../../components/Foot";
import { useState, useEffect } from "react";
import console from "console";

const GoodsTab = ["CD", "DVD", "BOOK"];

type Props = {
  goodsData: GoodsType;
};

const Goods: NextPage<Props> = ({ goodsData }) => {
  // const [products, setProducts] = useState<GoodsType[]>([]);
  // const [cd, setCd] = useState<GoodsType[]>([]);
  // const [dvd, setDvd] = useState<GoodsType[]>([]);
  // const [book, setBook] = useState<GoodsType[]>([]);
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/goods`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCd(
  //         data.filter(
  //           (item, i) => item.style === "Single" || item.style === "Album"
  //         )
  //       );
  //       setDvd(data.filter((item, i) => item.style === "DVD"));
  //       setBook(data.filter((item, i) => item.style === "BOOK"));
  //     });
  // }, []);
  // setProducts([cd, dvd, book]);
  return (
    <>
      <ChildHead />
      <Spacer size="64px" />
      <ChildHeadline ttl="CD/DVD/GOODS" tab={true} tabItems={GoodsTab} />
      <Spacer size="64px" />
      <Flex
        as="ul"
        justifyContent="center"
        alignItems="flex-start"
        flexWrap="wrap"
        gap="40px"
        w="80vw"
        maxW="1000px"
        m="0 auto"
      >
        {goodsData.map((obj, i) => (
          <GridGoods item={obj} key={i} />
        ))}
      </Flex>
      <FunClub />
      <Foot />
    </>
  );
};

export const getStaticPaths = async () => {
  // const paths = {
  // params: { id: ["cd", "dvd", "book"] },
  // params: ["cd", "dvd", "book"],
  // };
  const paths = ["Single", "Album", "DVD", "Book"].map((filter) => ({
    params: { id: filter },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const fetchGoodsData = await fetch(
    "http://localhost:3000/api/goods"
    // , {
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY,
    //   },
    // }
  );
  console.log(fetchGoodsData);

  const data = fetchGoodsData.filter((item) => item.style.match(params.id));

  return {
    props: {
      goodsData: data,
    },
  };
};

export default Goods;
