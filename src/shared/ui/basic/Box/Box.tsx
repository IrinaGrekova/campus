import {Box as BoxNB, IBoxProps} from "native-base";
import {FC} from "react";

export const Box: FC<IBoxProps> = ({children, ...restProps}) => {
    return <BoxNB {...restProps}>{children}</BoxNB>
};