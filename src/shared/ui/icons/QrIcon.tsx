import React from 'react';
import {Icon, Center} from 'native-base';
import {Path, Rect} from 'react-native-svg';

export const QrIcon = () => {
  return (
    <Center>
      <Icon
        size={5}
        mr="2"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <Rect
          x="3"
          y="3"
          width="5"
          height="5"
          fill="none"
          stroke="#233A5A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Rect
          x="3"
          y="12"
          width="5"
          height="5"
          fill="none"
          stroke="#233A5A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Rect
          x="12"
          y="3"
          width="5"
          height="5"
          fill="none"
          stroke="#233A5A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.5625 17L16.125 17"
          stroke="#233A5A"
          stroke-linecap="round"
        />
        <Path
          d="M15.6875 12L17 12L17 14.5L13.9375 14.5"
          stroke="#233A5A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path d="M13.5 12H11.75" stroke="#233A5A" stroke-linecap="round" />
        <Path
          d="M13.0625 17L11.75 17L11.75 14.5"
          stroke="#233A5A"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Icon>
    </Center>
  );
};
