import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import FirstView from "../components/FirstView";
import Navigation from "../components/Navigation";
import IndexHeadline from "../components/IndexHeadline";
import IndexMainBtn from "../components/IndexMainBtn";
import IndexEcBtn from "../components/IndexEcBtn";
import IndexNewsList from "../components/IndexNewsList";
import IndexGoodsList from "../components/IndexGoodsList";
import Foot from "../components/Foot";
import { Spacer } from "../components/Spacer";
import FunClub from "../components/FunClub";

let imgPath = "https://manami-sato.github.io/practice-site_2/src/img/";

let navLinks = [
  {
    link: "/news",
    name: "view NEWS",
    back: "News",
    target: "page",
    id: "news",
  },
  {
    link: "/media",
    name: "view MEDIA",
    back: "Media",
    target: "page",
    id: "media",
  },
  {
    link: "/goods",
    name: "view CD/DVD/GOODS",
    back: "CD/DVD/Goods",
    target: "page",
    id: "goods",
  },
  {
    link: "https://www.grand-arts.com/artist/inoueyoshio.html",
    name: "view PROFILE",
    back: "Profile",
    target: "_blank",
    id: "profile",
  },
  {
    link: "http://yoshioinoue.com/",
    name: "view FUNCLUB",
    back: "Funclub",
    target: "_blank",
    id: "funclub",
  },
];

const Index: NextPage = () => {
  return (
    <>
      {/* ファーストビュー */}
      <FirstView />
      {/* グローバルナビ */}
      <Navigation />
      {/* NEWS */}
      <Spacer size="64px" />
      <Flex as="section" alignItems="center" flexDirection="column">
        <IndexHeadline name={navLinks[0].back} />
        <Spacer size="32px" />
        <IndexNewsList />
        <Spacer size="64px" />
        <IndexMainBtn
          link={navLinks[0].link}
          name={"view " + navLinks[0].back}
        />
      </Flex>
      {/* MEDIA */}
      <Spacer size="120px" />
      <Flex as="section" alignItems="center" flexDirection="column">
        <IndexHeadline name={navLinks[1].back} />
        <Spacer size="32px" />
        <Spacer size="64px" />
        <IndexMainBtn
          link={navLinks[1].link}
          name={"view " + navLinks[1].back}
        />
      </Flex>
      {/* GOODS */}
      <Spacer size="120px" />
      <Flex as="section" alignItems="center" flexDirection="column">
        <IndexHeadline name={navLinks[2].back} />
        <Spacer size="32px" />
        <IndexGoodsList />
        <Spacer size="64px" />
        <IndexMainBtn
          link={navLinks[2].link}
          name={"view " + navLinks[2].back}
        />
        <Spacer size="16px" />
        <IndexEcBtn />
      </Flex>
      {/* PROFILE */}
      <Spacer size="120px" />
      <Flex
        as="section"
        justifyContent="space-around"
        alignItems="center"
        w="85vw"
        maxW="920px"
        m="0 auto"
        pos="relative"
        sx={{
          "&::after": {
            content: "'Profile'",
            fontSize: "7rem",
            fontFamily: "font1",
            pos: "absolute",
            right: 0,
            opacity: 0.3,
            mixBlendMode: "difference",
          },
        }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          w="40%"
          maxW="400px"
          h="504px"
          boxShadow="-15px 15px 30px rgba(0,0,0,0.2)"
        >
          <Box
            as="img"
            src={`${imgPath}profile.png`}
            alt="アイコン"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Flex>
        <Flex flexDirection="column" w="50%" fontSize="1.3rem">
          <Text as="span" fontSize="1.6rem" fontFamily="font2">
            Inoue Yoshio
          </Text>
          <Box as="h2" fontSize="2.7rem" fontWeight="bold" m="0 0 8px">
            井上 芳雄
          </Box>
          <Text mb="32px">
            1979年7月6日、福岡県出身。東京藝術大学在学中、ミュージカル「エリザベート」でルドルフ役としてデビュー。そんな感じのサンプルテキスト。それっぽい文章をもうちょっと書き足す予定です。
          </Text>
          <IndexMainBtn
            link={navLinks[3].link}
            name={"view " + navLinks[3].back}
          />
        </Flex>
      </Flex>
      {/* FC */}
      <FunClub />
      {/* Footer */}
      <Foot />
    </>
  );
};

export default Index;
