import {Icon} from 'native-base';
import {Path} from 'react-native-svg';
import {CommonIconProps} from '../../types';

export const SignOutIcon: React.FC<CommonIconProps> = ({
  color = '#000',
  size,
}) => {
  return (
    <Icon width="20" height="20" viewBox="0 0 18 20" fill="none">
      <Path
        d="M1.66669 9.99992L1.27625 9.68757L1.02637 9.99992L1.27625 10.3123L1.66669 9.99992ZM9.16669 10.4999C9.44283 10.4999 9.66669 10.2761 9.66669 9.99992C9.66669 9.72378 9.44283 9.49992 9.16669 9.49992V10.4999ZM4.60959 5.5209L1.27625 9.68757L2.05712 10.3123L5.39045 6.1456L4.60959 5.5209ZM1.27625 10.3123L4.60959 14.4789L5.39045 13.8542L2.05712 9.68757L1.27625 10.3123ZM1.66669 10.4999H9.16669V9.49992H1.66669V10.4999Z"
        fill="#EEF0F3"
      />
      <Path
        d="M8.33331 6.77669V3.33341L18.3333 1.66675V18.3334L8.33331 16.6667V13.3884"
        stroke="#EEF0F3"
        fill="none"
        stroke-linejoin="round"
        strokeWidth={2}
      />
    </Icon>
  );
};
