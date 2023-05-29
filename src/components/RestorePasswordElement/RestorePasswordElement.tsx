/* prettier-ignore */
import { FC } from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../RootStackParams';
import {Background} from '../Background/Background';
import {
  Box,
  Pressable,
  Stack,
  Text,
  ZStack,
  VStack,
  Input,
  Heading,
} from 'native-base';
import {BackIcon} from '../../../assets/icons/BackIcon';

type RestorePasswordScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'RestorePasswordElement'
>;

export const RestorePasswordElement: FC = () => {
  const navigation = useNavigation<RestorePasswordScreenProp>();

  return (
    <>
      <Background />
      <ZStack alignItems="center">
        <Box w={350} h={630} mt={106} bgColor="#EEF0F3" borderRadius={3}>
          <Pressable onPress={() => navigation.navigate('SignInElement')}>
            <Box alignItems="flex-start" ml={4} mt={2}>
              <BackIcon />
            </Box>
          </Pressable>
          <Stack space={4} w="100%" h="100%">
            <VStack
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              mt={8}>
              <Box color="#EEF0F3">
                <Heading>Восстановление пароля</Heading>
              </Box>
              <Box
                mt={4}
                mb={8}
                _text={{
                  textAlign: 'center',
                }}>
                Для получения инструкций по восстановлению пароля введите адрес
                вашей электронной почты
              </Box>
              <Box alignItems="center" flexDirection="column">
                <Input w={350} mb={6} placeholder="Адрес электронной почты" />
              </Box>
            </VStack>
            <Pressable flex={1} w={320} >
              {({isPressed}) => {
                return (
                  <Box
                    alignItems="center"
                    w={350}
                    bg={
                      isPressed
                        ? '#FFFFFF'
                        : {
                            linearGradient: {
                              colors: ['#679BFC', '#2B57A8'],
                              start: [0, 0],
                              end: [1, 0],
                            },
                          }
                    }
                    borderRadius={2}
                    p={4}>
                    <Text
                      style={[{color: isPressed ? '#1559D7' : '#FFFFFF'}]}
                      fontSize={18}>
                      Отправить инструкции
                    </Text>
                  </Box>
                );
              }}
            </Pressable>
          </Stack>
        </Box>
      </ZStack>
    </>
  );
};
