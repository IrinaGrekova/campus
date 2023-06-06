import React from 'react';
import {Icon, Center} from 'native-base';
import {Path} from 'react-native-svg';

export const BackIcon = () => {
  return (
    <Center>
      <Icon
        size={5}
        mr="2"
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none">
        <Path
          d="M5.66667 1L1 5.66667M1 5.66667L5.66667 10.3333M1 5.66667H15"
          stroke="#233A5A"
          stroke-linecap="round"
        />
      </Icon>
    </Center>
  )
}