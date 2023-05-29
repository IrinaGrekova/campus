/* prettier-ignore */
import { FC } from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../RootStackParams';
import {Background} from '../Background/Background';
import {Box, Center, ZStack} from 'native-base';
import {BackIcon} from '../../../assets/icons/BackIcon';

type SuccessSendingElementProp = NativeStackNavigationProp<
  RootStackParamList,
  'SuccessSendingElement'
>;

export const SuccessSendingElement: FC = () => {
  const navigation = useNavigation<SuccessSendingElementProp>();

  return (
    <>
      <Background />
      <ZStack alignItems="center">
        <Box w={350} h={630} mt={106} bgColor="#EEF0F3" borderRadius={3}>
          <Box
            mt={20}
            _text={{
              textAlign: 'center',
            }}>
            Сообщение успешно отправлено. Пожалуйста, следуйте инструкциям в
            письме.
          </Box>
        </Box>
      </ZStack>
    </>
  );
};
