import { useToken } from "native-base";
import React, { PropsWithChildren } from "react";
import { Box } from "shared/ui";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  // const bgColor = useToken("colors", "custom.backgroundColor");

  return (
    // <Box h="full" w="full" bg={bgColor}>
    <>{children}</>
    // </Box>
  );
};
