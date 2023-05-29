import { extendTheme, Heading } from 'native-base';
import LinearGradient from "react-native-linear-gradient";



export const theme = extendTheme({
    fontConfig: {
        fontFamily: 'Raleway-Regular',
    },
    fonts: {
        body: 'Raleway',
    },
    config: {
        dependencies: {
              'linear-gradient': LinearGradient,
            },
    },
    components: {
        Text: {
            baseStyle: {
                color: "#233A5A",
                fontFamily: "Raleway-Regular",
                fontSize: "14px"

            }
        },
        Heading: {
            baseStyle: {
                color: "#5E678C",
                fontFamily: "Raleway-Bold",
                size: "lg",
            }
        },
        Input: {
            baseStyle: {
                width: "90%",
                height: "52px",
                borderRadius: "none",
                _focus: {
                      borderBottomColor: '#B96FF6',
                      borderBottomWidth: '3',
                      bg: "#FFFFFF"
                    }
            },
            defaultProps: {
                variant: "underlined",
                fontSize: 16,
                bg: "#FFFFFF",
                borderBottomWidth: 2,
                borderBottomColor: "#D2D9F5",
                p: 4,
                autoCapitalize: "none"
                
            }
        }
    }
})