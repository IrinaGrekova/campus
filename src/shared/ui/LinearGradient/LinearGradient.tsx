import { useTheme } from "native-base";
import {
    LinearGradientProps,
    LinearGradient as LinearGradientNB,
} from "react-native-linear-gradient";
import {FC} from "react";

export const LinearGradient: FC<Partial<LinearGradientProps>> = (props) => {
    const {colors: themeColors, space} = useTheme();
    return (
        <LinearGradientNB
            colors = {[themeColors.violet[300], themeColors.darkBlue[500]]}
            style={{width: space.full, height: space.full}}
            start={{x: 0, y: 0}}
            end = {{x: 1, y: 0}}
            {...props}
            />
    );
};