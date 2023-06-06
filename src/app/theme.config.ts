import { ICustomTheme } from "native-base";
import LinearGradient from "react-native-linear-gradient";



export const THEME_CONFIG: ICustomTheme = {
    // fontConfig: {
    //     fontFamily: 'Raleway-Regular',
    // },
    // fonts: {
    //     body: 'Raleway',
    // },
    fontConfig: {
        Raleway: {
            400: {
                normal: "Raleway-Regular"
            },
            500: {
                normal: "Raleway-Medium"
            },
            700: {
                normal: "Raleway-Bold"
            },
        },
    },
    fonts: {
        heading: "Raleway",
        body: "Raleway",
        mono: "Raleway",
    },
    config: {
        dependencies: {
              'linear-gradient': LinearGradient,
            },
    },
    colors: {
        violet: {
          100: "#CFBCFD",
          200: " #ECDAFF",
          300: "#AB87EA",
          500: "#8B5CF6",
          600: "#B96FF7",
        },
        darkBlue: {
          500: "#4F7FDA",
        },
    
        custom: {
          backgroundColor: "#F4F5FC",
          primaryText: "#233A5A",
          lightText: "#94A8C7",
        },
      },
    
      space: {
        "1/8": 1,
        "0.5": 4,
        "1": 8,
        "1.5": 12,
        "2": 16,
        "2.5": 20,
        "3": 24,
        "3.5": 28,
        "4": 32,
        "5": 40,
        "6": 48,
        "7": 56,
        "8": 64,
        "9": 72,
        "10": 80,
        "12": 96,
        "16": 128,
        "20": 160,
        "24": 192,
        "32": 256,
        "40": 320,
        "48": 384,
        "56": 448,
        "64": 512,
        "72": 576,
        "80": 640,
        "96": 768,
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
                autoCapitalize: "none",
                p: 2
                
            }
        }
    }
}