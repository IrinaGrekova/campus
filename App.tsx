import React, {FC, useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useStore} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LinearGradient from 'react-native-linear-gradient';

import {theme} from './src/theme';
import {SignInElement} from './src/components/SignInElement/SignInElement';
import {RestorePasswordElement} from './src/components/RestorePasswordElement/RestorePasswordElement';
import {NewPasswordElement} from './src/components/NewPasswordElement/NewPasswordElement';
import {Profile} from './src/components/Profile';
import {Pass} from './src/components/Pass';

const App: FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider config={config} theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignInElement" component={SignInElement} />
          <Stack.Screen
            name="RestorePasswordElement"
            component={RestorePasswordElement}
          />
          <Stack.Screen
            name="NewPasswordElement"
            component={NewPasswordElement}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Pass" component={Pass} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
  font: 'Raleway-Regular',
};

export default App;
