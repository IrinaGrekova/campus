/* prettier-ignore */
import { FC } from 'react';
import {Box, Stack, Image, ZStack, Link} from 'native-base';
import {RouteParamsList, RoutesEnum} from '../../shared/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackNavigationProp<
  RouteParamsList,
  RoutesEnum.SUCCESSFULSENDING
>;

export const SuccessSendingElement: FC = () => {

  const navigation = useNavigation<Props>();

  return (
    <>
      <Stack w="100%" h="100%" position="absolute" zIndex={-1}>
        <Box
          h="20%"
          bg={{
            linearGradient: {
              colors: ['#AB87EA', '#4F7FDA'],
              start: [0, 0],
              end: [1, 0],
            },
          }}>
          <Box flexDirection="row" justifyContent="space-between" ml={3} mr={3}>
            <Image
              source={require('../../../assets/images/logoCampus.png')}
              alt="CampusLogo"
              top={6}
            />
            <Image
              source={require('../../../assets/images/logoMGMSU.png')}
              alt="logoMGMSU"
              top={4}
              size={16}
            />
          </Box>
        </Box>
      </Stack>
      <ZStack alignItems="center">
        <Box w={350} h={630} mt={106} bgColor="#EEF0F3" borderRadius={3}>
        <Link
                  _text={{
                    fontSize: 'sm',
                    color: '#8B5CF6',
                    lineHeight: '16',
                  }}
                  alignSelf="flex-end"
                  mt={1}
                  mr={1}
                  isUnderlined={false}
                  onPress={() =>
                    navigation.navigate(RoutesEnum.NEW_PASSWORD)
                  }>
                  Ввод нового пароля
                </Link>
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
