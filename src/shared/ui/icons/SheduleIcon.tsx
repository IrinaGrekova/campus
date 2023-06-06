import { Icon } from "native-base";
import { Path, Rect } from "react-native-svg";
import { CommonIconProps } from "../../types";

export const SheduleIcon: React.FC<CommonIconProps> = ({
  color = "#000",
  size,
}) => {
  return (
    <Icon size={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M2.5 5H17.5V17.5H2.5V5Z"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />

      <Path
        d="M3.33301 9.16675H16.6663"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M7.08301 11.6667L6.24967 11.6667"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M7.08301 15L6.24967 15"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />

      <Path
        d="M13.75 11.6667L12.9167 11.6667"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />

      <Path
        d="M13.75 15L12.9167 15"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />

      <Path
        d="M6.66699 2.5L6.66699 5.83333"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />

      <Path
        d="M13.333 2.5L13.333 5.83333"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />
    </Icon>
  );
};
