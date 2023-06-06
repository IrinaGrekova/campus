import { Text as TextNB, ITextProps, useToken } from "native-base";
import { FC } from "react";

export const Text: FC<ITextProps> = ({ children, color, ...restProps }) => {
  const textColor = useToken("colors", "custom.primaryText");

  return (
    <TextNB
      color={color || textColor}
      // fontFamily="Raleway"
      {...restProps}
    >
      {children}
    </TextNB>
  );
};