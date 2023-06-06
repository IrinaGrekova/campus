import {Icon} from 'native-base';
import {Path} from 'react-native-svg';
import {CommonIconProps} from '../../types';

export const PhoneIcon: React.FC<CommonIconProps> = ({
  color = '#000',
  size,
}) => {
  return (
    <Icon width="15" height="16" viewBox="0 0 15 16" fill="none">
      <Path
        d="M0.5 4.11111L3.61111 1L6.72222 4.11111L5.37802 5.45531C5.2518 5.58153 5.22051 5.77436 5.30034 5.93401C6.2233 7.77993 7.72007 9.2767 9.56599 10.1997C9.72564 10.2795 9.91847 10.2482 10.0447 10.122L11.3889 8.77778L14.5 11.8889L11.3889 15L10.4238 14.2762C7.79967 12.3081 6.48759 11.324 5.33178 10.1682C4.17597 9.01241 3.19192 7.70034 1.22381 5.07619L0.5 4.11111Z"
        fill="none"
        stroke="#233A5A"
        stroke-linejoin="round"
      />
    </Icon>
  );
};
