/* prettier-ignore */
import { FC, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteParamsList, RoutesEnum} from '../../shared/types';
import {
  Box,
  Pressable,
  Stack,
  Text,
  ZStack,
  VStack,
  Input,
  Heading,
  Image,
} from 'native-base';
import {BackIcon} from '../../shared/ui/icons/BackIcon';

type Props = NativeStackNavigationProp<
  RouteParamsList,
  RoutesEnum.RESTORE_PASSWORD
>;

export const RestorePasswordElement: FC = () => {
  const navigation = useNavigation<Props>();

  const [userEmail, setUserEmail] = useState('');

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
          <Pressable onPress={() => navigation.navigate(RoutesEnum.SIGNIN)}>
            <Box alignItems="flex-start" ml={4} mt={2}>
              <BackIcon />
            </Box>
          </Pressable>
          <Stack space={4} w="100%" h="100%">
            <VStack
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              mt={4}>
              <Box color="#EEF0F3">
                <Heading>Восстановление пароля</Heading>
              </Box>
              <Box
                mt={2}
                mb={4}
                _text={{
                  textAlign: 'center',
                }}>
                Для получения инструкций по восстановлению пароля введите адрес
                вашей электронной почты
              </Box>
              <Box alignItems="center" flexDirection="column">
                <Input
                  w={350}
                  placeholder="Адрес электронной почты"
                  value={userEmail}
                  onChangeText={text => setUserEmail(text)}
                />
              </Box>
            </VStack>
            <Pressable
              flex={1}
              w="100%"
              mt={4}
              onPressOut={() =>
                navigation.navigate(RoutesEnum.SUCCESSFULSENDING)
              }>
              {({isPressed}) => {
                return (
                  <Box
                    alignItems="center"
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
                    p={2}>
                    <Text
                      style={[{color: isPressed ? '#1559D7' : '#FFFFFF'}]}
                      fontSize={18}
                      fontWeight={500}>
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
