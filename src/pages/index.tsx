import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  RouteParamsList,
  RoutesEnum,
} from '../shared/types';
import {NavBar} from '../features/NavBar';
import {TAB_ROUTE_TO_TITLE_MAP} from '../shared/constants';

import {
  LinearGradient,
  PaperIcon,
  QrIcon,
  SheduleIcon,
  UserIcon,
} from '../shared/ui';
import {Schedule} from '@mui/icons-material';
import {Profile} from '../pages/Profile';
import {Pass} from '../pages/Pass';
import { News } from './News/News';

const Tab = createBottomTabNavigator<RouteParamsList>();

export const Routing = () => {
  return (
      <Tab.Navigator
        tabBar={props => <NavBar {...props} />}
        initialRouteName={RoutesEnum.PASS}
        screenOptions={{
          unmountOnBlur: true,
          headerBackground: () => <LinearGradient />,
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen
          name={RoutesEnum.PASS}
          component={Pass}
          options={{
            title: TAB_ROUTE_TO_TITLE_MAP[RoutesEnum.PASS],
            tabBarIcon: QrIcon,
          }}
        />

        <Tab.Screen
          name={RoutesEnum.PROFILE}
          component={Profile}
          options={{
            title: TAB_ROUTE_TO_TITLE_MAP[RoutesEnum.PROFILE],
            tabBarIcon: UserIcon,
          }}
        />

        <Tab.Screen
          name={RoutesEnum.SCHEDULE}
          component={Schedule}
          options={{
            title: TAB_ROUTE_TO_TITLE_MAP[RoutesEnum.SCHEDULE],
            tabBarIcon: SheduleIcon,
          }}
        />

        <Tab.Screen
          name={RoutesEnum.NEWS}
          component={News}
          options={{
            title: TAB_ROUTE_TO_TITLE_MAP[RoutesEnum.NEWS],
            tabBarIcon: PaperIcon,
          }}
        />
      </Tab.Navigator>
  );
};
