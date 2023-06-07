/* prettier-ignore */
import { useState, FC, useEffect } from 'react';
import {RouteParamsList, RoutesEnum} from '../../shared/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

import {
  Box,
  Pressable,
  Stack,
  Text,
  HStack,
  IconButton,
  Alert,
  ZStack,
  VStack,
  Input,
  InputGroup,
  Heading,
  Image,
  Collapse,
  CloseIcon,
} from 'native-base';

import {VisOffIcon} from '../../shared/ui/icons/VisOffIcon';
import {VisIcon} from '../../shared/ui/icons/VisIcon';
import {AlertMessageNewPassword} from './AlertMessageNewPassword';

type Props = NativeStackNavigationProp<
  RouteParamsList,
  RoutesEnum.NEW_PASSWORD
>;

export const NewPasswordElement: FC = () => {
  const [show, setShow] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const [showError, setShowError] = useState(false);

  const [validation, setValidation] = useState(false);

  const navigation = useNavigation<Props>();

  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const submitNewPassword = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/;

    if (password.length < 8 || !regex.test(password)) {
      setValidation(true);
    } else if (password != passwordRepeat) {
      setShowError(true);
    } else {
      navigation.navigate(RoutesEnum.SIGNIN);
    }
  };

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
          <Stack space={4} w="100%" h="100%">
            <VStack
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              marginTop={6}>
              <Box color="#EEF0F3">
                <Heading>Введите новый пароль</Heading>
              </Box>
              <Collapse isOpen={showError} mt={2} h={16} justifyContent="space-around">
                <Alert status="error" w={350}>
                  <HStack space={32} justifyContent="space-evenly">
                    <HStack alignItems="center" space={1} >
                      <Alert.Icon />
                      <Box>
                        <Text
                          _dark={{
                            color: 'coolGray.800',
                          }}>
                          Пароли не совпадают
                        </Text>
                      </Box>
                    </HStack>
                    <IconButton
                      _focus={{
                        borderWidth: 0,
                      }}
                      icon={<CloseIcon size="3" />}
                      _icon={{
                        color: 'coolGray.600',
                      }}
                      variant="unstyled"
                      onPress={() => setShowError(false)}
                    />
                  </HStack>
                </Alert>
              </Collapse>
              <Box alignItems="center" flexDirection="column">
                <InputGroup flexDirection="column" alignItems="center" mt={4}>
                  <Input
                    placeholder="Новый пароль"
                    type={show ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        {show ? <VisIcon /> : <VisOffIcon />}
                      </Pressable>
                    }
                    value={password}
                    onChangeText={text => setPassword(text)}
                  />

                  <Input
                    placeholder="Подтверждение пароля"
                    mt={4}
                    type={showReplay ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShowReplay(!showReplay)}>
                        {showReplay ? <VisIcon /> : <VisOffIcon />}
                      </Pressable>
                    }
                    value={passwordRepeat}
                    onChangeText={text => setPasswordRepeat(text)}
                  />
                </InputGroup>
                <Collapse isOpen={validation}>
                  <HStack alignItems="center">
                    <Text color="#FF121C">
                      Пароль не соответствует требованиям безопасности:
                    </Text>
                    <IconButton
                      variant="unstyled"
                      icon={<CloseIcon size="3" />}
                      _icon={{
                        color: '#FF121C',
                      }}
                      ml={4}
                      mb={2}
                      onPress={() => setValidation(false)}
                    />
                  </HStack>
                  <VStack flexDirection="column">
                    <Text color="#FF121C">
                      - Состоять из 8 и более символов
                    </Text>
                    <Text color="#FF121C">
                      - Содержать прописные латинские буквы
                    </Text>
                    <Text color="#FF121C">
                      - Содержать строчные латинские буквы
                    </Text>
                    <Text color="#FF121C">- Содержать цифры</Text>
                    <Text color="#FF121C">
                      - Сщдержать знаки пунктуации (!@$%()+,-/:;&@{}^_~)
                    </Text>
                  </VStack>
                </Collapse>
              </Box>
            </VStack>
            <Pressable flex={1} w="100%" mt={4} onPressOut={submitNewPassword}>
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
                      Сохранить
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
