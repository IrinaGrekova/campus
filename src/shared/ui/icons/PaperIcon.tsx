import { Icon } from "native-base";
import { Path, Rect } from "react-native-svg";
import { CommonIconProps } from "../../types";

export const PaperIcon: React.FC<CommonIconProps> = ({
  color = "#000",
  size,
}) => {
  return (
    <Icon size={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M16.2497 2.50001L18.333 2.50001L18.333 7.5L14.1663 7.5M16.2497 2.50001L16.1663 2.50001C15.2235 2.50001 14.7521 2.50001 14.4592 2.7929C14.1663 3.08579 14.1663 3.5572 14.1663 4.50001L14.1663 7.5M16.2497 2.50001L3.33301 2.50001L3.33301 17.5L14.1663 17.5L14.1663 7.5"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />
      <Path
        d="M6.66699 5.83325L10.0003 5.83325"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />

      <Path
        d="M7.5 9.16675H6.66667"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />

      <Path
        d="M6.66699 12.5L9.16699 12.5"
        stroke={color}
        strokeLinecap="round"
        fill="none"
      />
    </Icon>
  );
};
