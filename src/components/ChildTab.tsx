import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import ChildBtn from "./ChildBtn";

type ChildTabProps = {
  tabItems: string[];
};

const ChildTab: FC<ChildTabProps> = ({ tabItems }) => {
  const [value, setValue] = useState(0);
  return (
    <Flex as="ul" gap="16px">
      {tabItems.map((item, i) => (
        <Flex as="li" key={i} onClick={() => setValue(i)}>
          <ChildBtn name={item} flag={value === i} />
        </Flex>
      ))}
    </Flex>
  );
};

export default ChildTab;
