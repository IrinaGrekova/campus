import { HeaderTitleProps } from "@react-navigation/elements/src/types";
import { FC } from "react";
import { Box, Text } from "shared/ui";

export const HeaderTitle: FC<HeaderTitleProps> = ({ children }) => (
  <Text bold fontSize="2xl" color="white">
    {children}
  </Text>
);
