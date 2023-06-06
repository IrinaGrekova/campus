import {Icon} from 'native-base';
import {Path} from 'react-native-svg';
import {CommonIconProps} from '../../types';

export const ShevronUpIcon: React.FC<CommonIconProps> = ({
  color = '#000',
  size,
}) => {
  return (
    <Icon width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        fill="none"
        stroke="#F8FBFF"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};
