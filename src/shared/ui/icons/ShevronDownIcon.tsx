import {Icon} from 'native-base';
import {Path} from 'react-native-svg';
import {CommonIconProps} from '../../types';

export const ShevronDownIcon: React.FC<CommonIconProps> = ({
  color = '#000',
  size,
}) => {
  return (
    <Icon width="15" height="8" viewBox="0 0 15 8" fill="none">
      <Path
        d="M14.166 0.666586L7.49935 7.33325L0.832683 0.666586"
        fill="none"
        stroke="#F8FBFF"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );
};
