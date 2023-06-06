import { NativeStackScreenProps } from "@react-navigation/native-stack";


export enum RoutesEnum {
  PASS = "PASS",
  PROFILE = "PROFILE",
  SIGNIN = "SIGNIN",
  RESTORE_PASSWORD = "RESTORE_PASSWORD",
  NEW_PASSWORD = "NEW_PASSWORD",
  SUCCESSFULSENDING = "SUCCESSFULSENDING",
  TAB_BAR_SCREEN = "TAB_BAR_SCREEN",
  SPLASH_SCREEN = "SPLASH_SCREEN",
  NEWS_TAB_SCREEN = "NEWS_TAB_SCREEN",
  SCHEDULE = "SCHEDULE",
  ROUTING = "ROUTING",
  NEWS = "NEWS"
};


export type RouteParamsList = {
    [RoutesEnum.PASS]: undefined;
    [RoutesEnum.PROFILE]: undefined;
    [RoutesEnum.SIGNIN]: undefined;
    [RoutesEnum.RESTORE_PASSWORD]: undefined;
    [RoutesEnum.NEW_PASSWORD]: undefined;
    [RoutesEnum.SUCCESSFULSENDING]: undefined;
    [RoutesEnum.TAB_BAR_SCREEN]: undefined;
    [RoutesEnum.SPLASH_SCREEN]: undefined;
    [RoutesEnum.NEWS]: undefined;
    [RoutesEnum.SCHEDULE]: undefined;
    [RoutesEnum.ROUTING]: undefined;
};

export type PossiblyEmpty<T extends string> = T | "";
export type TabId = keyof RouteParamsList;

export type PropsWithNavigation<
ScreenName extends keyof RouteParamsList,
Props extends React.ComponentProps<React.ComponentType> = {}
> = NativeStackScreenProps<RouteParamsList, ScreenName> & Props;

export type ExcludeFunctionsField<T extends object> = {
    [key in keyof T as T[key] extends Function ? never : key] : T[key];
}

export enum LoadingState {
    INITIAL = "INITIAL",
    LOADING = "LOADING",
    LOADED = "LOADED",
}

export type VoidFunction = () => void;

export type CommonIconProps = {
    focused: boolean;
    color: string;
    size: number;
}

