import { Box } from "@chakra-ui/react";
import { FC } from "react";

export type IndexHeadlineTxt = {
  name: string;
};

const IndexHeadline: FC<IndexHeadlineTxt> = ({ name }) => {
  return (
    <Box
      as="h2"
      color="primary"
      fontSize="5rem"
      fontFamily="font1"
      lineHeight="5rem"
    >
      {name}
    </Box>
  );
};

export default IndexHeadline;
