import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import { Spacer } from "../components/Spacer";
import ChildHead from "../components/ChildHead";
import ChildHeadline from "../components/ChildHeadline";
import FunClub from "../components/FunClub";
import Foot from "../components/Foot";
import { useState, useEffect } from "react";

const MediaTab = ["STAGE", "TV/RADIO/MOVIE", "WEB/雑誌/新聞", "過去の出演情報"];

const Media: NextPage = () => {
  return (
    <>
      <ChildHead />
      <Spacer size="64px" />
      <ChildHeadline ttl="MEDIA" tab={true} tabItems={MediaTab} />
      <Spacer size="64px" />
      <FunClub />
      <Foot />
    </>
  );
};

export default Media;
