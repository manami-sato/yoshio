import { Flex, Box } from "@chakra-ui/react";
import { FC } from "react";
import ChildTab from "./ChildTab";

type ChildHeadlineProps = {
  ttl: string;
  tab: boolean;
  tabItems?: string[];
};

const ChildHeadline: FC<ChildHeadlineProps> = ({ ttl, tab, tabItems }) => {
  if (tabItems === undefined) return <p>コンテンツが存在しません</p>;
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      w="80vw"
      maxW="1000px"
      m="0 auto"
    >
      <Box as="h2" fontSize="2.6rem" fontFamily="font2" fontWeight="normal">
        {ttl}
      </Box>
      <Box
        as="ul"
        style={
          tab
            ? {
                display: "block",
              }
            : {
                display: "none",
              }
        }
      >
        <ChildTab tabItems={tabItems} />
      </Box>
    </Flex>
  );
};

export default ChildHeadline;
