import React from 'react';
import {Icon, Center} from 'native-base';
import {Path, Circle} from 'react-native-svg';

export const UserIcon = () => {
  return (
    <Center>
      <Icon
        size={5}
        mr="2"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none">
        <Circle
          cx="10.0003"
          cy="6.66658"
          r="2.83333"
          stroke="#233A5A"
          stroke-linecap="round"
        />
        <Path
          d="M3.89557 14.7476C4.35607 12.3614 6.8314 11.25 9.26167 11.25H10.7383C13.1686 11.25 15.6439 12.3614 16.1044 14.7476C16.1361 14.9116 16.1634 15.08 16.1856 15.2523C16.2561 15.8001 15.8023 16.25 15.25 16.25H4.75C4.19771 16.25 3.74395 15.8001 3.81441 15.2523C3.83657 15.08 3.86392 14.9116 3.89557 14.7476Z"
          stroke="#233A5A"
          stroke-linecap="round"
        />
      </Icon>
    </Center>
  );
};
