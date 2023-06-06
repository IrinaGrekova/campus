import { useTheme, useToken } from "native-base";
import React, { ComponentType, ComponentProps, PropsWithChildren } from "react";
import {
  CommonIconProps,
  PossiblyEmpty,
  TabId,
  VoidFunction,
} from "../../../shared/types";
import { Box, LinearGradient, Pressable, Text } from "../../../shared/ui";

type Props = PropsWithChildren<{
  isActiveTab: boolean;
  onNavigate: VoidFunction;
  icon?: (props: CommonIconProps) => React.ReactNode;
  title?: string;
}>;

export function NavBarTab({ isActiveTab, onNavigate, icon, title }: Props) {
  const { space } = useTheme();
  const [activeColor, baseColor] = useToken("colors", [
    "violet.500",
    "custom.primaryText",
  ]);

  const color = isActiveTab ? activeColor : baseColor;

  return (
    <Pressable
      flexGrow={1}
      onPress={onNavigate}
      disabled={isActiveTab}
      pt="2"
      pb="2.5"
    >
      {isActiveTab && (
        <LinearGradient
          style={{
            width: space["full"],
            height: space["0.5"],
            position: "absolute",
            top: -0,
          }}
        />
      )}

      <Box px="2.5" alignItems="center">
        {icon && icon({ focused: isActiveTab, color, size: 5 })}
        <Text fontWeight="500" fontSize="2xs" color={color}>
          {title}
        </Text>
      </Box>
    </Pressable>
  );
}
