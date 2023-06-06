import {Icon} from 'native-base';
import {Rect, Path} from 'react-native-svg';
import {CommonIconProps} from '../../types';

export const EmailIcon: React.FC<CommonIconProps> = ({
  color = '#000',
  size,
}) => {
  return (
    <Icon width="21" height="20" viewBox="0 0 21 20" fill="none">
      <Rect
        x="3.5"
        y="4"
        width="15"
        height="12"
        fill="none"
        stroke="#233A5A"
        stroke-linejoin="round"
      />
      <Path
        d="M3.5 7L11 10L18.5 7"
        stroke="#233A5A"
        fill="none"
        stroke-linejoin="round"
      />
    </Icon>
  );
};
