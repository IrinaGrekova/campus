import React from 'react';
import {Icon, Center} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rect} from 'react-native-svg';

export const LogoSplashScreen = () => {
  return (
    <Center>
      <Icon
        size={350}
        mr="2"
        mt={5}
        width="339"
        height="339"
        viewBox="0 0 339 339"
        fill="currentColor">
        <Rect
          x="1"
          y="1"
          width="106.964"
          height="106.964"
          stroke="white"
          stroke-width="2"
        />
        <Rect
          x="116.018"
          y="1"
          width="106.964"
          height="106.964"
          stroke="white"
          stroke-width="2"
        />
        <Rect
          x="116.018"
          y="116.018"
          width="106.964"
          height="106.964"
          stroke="white"
          stroke-width="2"
        />
        <Rect
          x="231.035"
          y="1"
          width="106.964"
          height="106.964"
          stroke="none"
          stroke-width="2"
        />
        <Rect
          x="231.035"
          y="116.018"
          width="106.964"
          height="106.964"
          stroke="white"
          stroke-width="2"
        />
        <Rect
          x="231.035"
          y="231.036"
          width="106.964"
          height="106.964"
          stroke="white"
          stroke-width="2"
        />
      </Icon>
    </Center>
  );
};

{
  /* <svg width="339" height="339" viewBox="0 0 339 339" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="106.964" height="106.964" stroke="white" stroke-width="2"/>
<rect x="116.018" y="1" width="106.964" height="106.964" stroke="white" stroke-width="2"/>
<rect x="116.018" y="116.018" width="106.964" height="106.964" stroke="white" stroke-width="2"/>
<rect x="231.035" y="1" width="106.964" height="106.964" stroke="white" stroke-width="2"/>
<rect x="231.035" y="116.018" width="106.964" height="106.964" stroke="white" stroke-width="2"/>
<rect x="231.035" y="231.036" width="106.964" height="106.964" stroke="white" stroke-width="2"/>
</svg> */
}
