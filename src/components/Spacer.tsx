import { Box } from "@chakra-ui/react";
import { FC } from "react";

type SpacerProps = {
  size: string;
  horizontal?: boolean;
};

export const Spacer: FC<SpacerProps> = ({ size, horizontal }) => {
  return (
    <Box
      style={
        horizontal
          ? {
              width: size,
              height: "auto",
            }
          : { width: "auto", height: size }
      }
    />
  );
};
