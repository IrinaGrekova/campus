import React, {FC, useEffect} from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LinearGradient from 'react-native-linear-gradient';

import {THEME_CONFIG} from './theme.config';
import {Routing} from '../pages';
import {RoutesEnum} from '../shared/types';
import {SplashScreen} from '../pages/SplashScreen/SplashScreen';
import {NewPasswordElement} from '../pages/NewPasswordElement/NewPasswordElement';
import {RestorePasswordElement} from '../pages/RestorePasswordElement';
import {SignInElement} from '../pages/SignInElement';
import {SuccessSendingElement} from '../pages/SuccessSendingElement';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pass } from '../pages/Pass';
import { Profile } from '../pages/Profile';
import { useAuthStore, CurrentUser } from '../store/useAuthStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const appTheme = extendTheme(THEME_CONFIG);

const App: FC = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();


  return (
    <NativeBaseProvider config={config} theme={appTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={RoutesEnum.SPLASH_SCREEN}
          screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen
            name={RoutesEnum.PASS}
            component={Pass}
          />
          <Stack.Screen
            name={RoutesEnum.SPLASH_SCREEN}
            component={SplashScreen}
          />
          <Stack.Screen name={RoutesEnum.SIGNIN} component={SignInElement} />
          <Stack.Screen
            name={RoutesEnum.RESTORE_PASSWORD}
            component={RestorePasswordElement}
          />
          <Stack.Screen
            name={RoutesEnum.NEW_PASSWORD}
            component={NewPasswordElement}
          />
          <Stack.Screen
            name={RoutesEnum.SUCCESSFULSENDING}
            component={SuccessSendingElement}
          />
          
          <Stack.Screen
            name={RoutesEnum.PROFILE}
            component={Profile}
          />
          {/* <Stack.Screen
            name={RoutesEnum.ROUTING}
            component = {Routing} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

export default App;
