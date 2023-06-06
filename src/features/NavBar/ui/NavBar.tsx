import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useTheme, useToken } from "native-base";
import { RoutesEnum, TabId } from "../../../shared/types";
import { NavBarTab } from "../../../entities/NavBarTab/ui";
import { Box, LinearGradient } from "../../../shared/ui";

type Props = BottomTabBarProps;

export const NavBar: React.FC<Props> = ({ navigation, state, descriptors }) => {
  const bgColor = useToken("colors", "custom.backgroundColor");
  const [minHeight, fullSpace] = useToken("space", ["1/8", "full"]);

  return (
    <Box bg={bgColor} position="relative">
      <LinearGradient
        style={{
          width: fullSpace,
          height: minHeight,
        }}
      />

      <Box flexDir="row" justifyContent="space-between" alignItems="center">
        {state.routes.map(({ key, name }, i) => {
          const {
            options: { title, tabBarIcon },
          } = descriptors[key];

          return (
            <NavBarTab
              key={key}
              title={title}
              isActiveTab={state.index === i}
              onNavigate={() => navigation.navigate(name as TabId)}
              icon={tabBarIcon}
            />
          );
        })}
      </Box>
    </Box>
  );
};
