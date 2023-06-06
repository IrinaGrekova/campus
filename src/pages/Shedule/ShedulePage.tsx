import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RouteParamsList, RoutesEnum} from '../../shared/types';
import {Text} from '../../shared/ui';

type Props = BottomTabScreenProps<RouteParamsList, RoutesEnum.SCHEDULE>;

export const ShedulePage: React.FC<Props> = ({navigation}) => {
  return (
    <>
      <Text>Расписание</Text>
    </>
  );
};
