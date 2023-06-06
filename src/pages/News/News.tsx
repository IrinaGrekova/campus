import { FC } from "react"
import { RouteParamsList, RoutesEnum } from "../../shared/types";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {Text} from '../../shared/ui';


type Props = BottomTabScreenProps<RouteParamsList, RoutesEnum.NEWS>;


export const News: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <Text>Расписание</Text>
    </>
  );
};
