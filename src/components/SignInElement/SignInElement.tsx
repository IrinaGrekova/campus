/* prettier-ignore */
import { useState, FC } from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import {Buffer} from 'buffer';

import {RootStackParamList} from '../../RootStackParams';
import {Background} from '../Background/Background';
import {
  Box,
  Checkbox,
  Link,
  Pressable,
  Stack,
  Text,
  ZStack,
  VStack,
  Input,
  InputGroup,
  HStack,
  Heading,
  FormControl,
  Collapse,
  Alert,
  IconButton,
  CloseIcon,
} from 'native-base';

import {VisOffIcon} from '../../../assets/icons/VisOffIcon';
import {VisIcon} from '../../../assets/icons/VisIcon';
import {Pass} from '../Pass';
import {useAuthStore} from '../../store/useAuthStore';


type SignInScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignInElement'
>;

type LoginKy = {
  accessToken: string;
};

export const SignInElement: FC = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const accessToken = useAuthStore(state => state.accessToken);
  const [memory, setMemory] = useState(false);
  const setToken = useAuthStore(state => state.login);

  const navigation = useNavigation<SignInScreenProp>(); 

  const handleLogin = async (): Promise<void> => {
    try {
      const response = await axios.post<LoginKy>(
        'http://localhost:5000/api/v1/auth/signin',
        {
          loginOrEmail: email,
          password: password,
        }, {
          withCredentials: true
        }
      );
      const {accessToken} = response.data;
      const parts = accessToken
        .split('.')
        .map(part =>
          Buffer.from(
            part.replace(/-/g, '+').replace(/_/g, '/'),
            'base64',
          ).toString(),
        );

      const payload = JSON.parse(parts[1]);

      const userId = payload.sub;

      console.log(accessToken);
      setToken(accessToken, memory, userId);


      const userData = await axios.get(`http://localhost:5001/api/v1/internal/users/${userId}`)
      const { firstName, lastName } = userData.data

      console.log(firstName, lastName)


      if (accessToken) {
        navigation.replace('Profile');
      }
    } catch (error) {
      setShowAlert(true);
      console.log(error);
    }
  };


  return (
    <>
      <Background />
      <ZStack alignItems="center">
        <Box w={350} h={630} mt={106} bgColor="#EEF0F3" borderRadius={3}>
          <Stack space={4} w="100%" h="100%">
            <VStack
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              marginTop={8}>
              <Box color="#EEF0F3">
                <Heading>Войти</Heading>
              </Box>
              <Collapse isOpen={showAlert}>
                <Alert w="100%" status="error" mt={2}>
                  <VStack space={2} flexShrink={1} w="100%">
                    <HStack
                      flexShrink={1}
                      space={2}
                      justifyContent="space-between">
                      <HStack space={2} flexShrink={1}>
                        <Alert.Icon mt="1" />
                        <Text fontSize="md" color="coolGray.800">
                          Неправильный логин или пароль
                        </Text>
                      </HStack>
                      <IconButton
                        variant="unstyled"
                        _focus={{
                          borderWidth: 0,
                        }}
                        icon={<CloseIcon size="3" />}
                        _icon={{
                          color: 'coolGray.600',
                        }}
                        onPress={() => setShowAlert(false)}
                      />
                    </HStack>
                  </VStack>
                </Alert>
              </Collapse>
              <Box alignItems="center" flexDirection="column">
                <InputGroup
                  w="100%"
                  flexDirection="column"
                  alignItems="center"
                  mt={8}>
                  <FormControl isInvalid={showAlert}>
                    <Input
                      type="text"
                      placeholder="Адрес электронной почты"
                      mb={6}
                      value={email}
                      onChangeText={text => setEmail(text)}
                    />

                    <Input
                      placeholder="Пароль"
                      type={show ? 'text' : 'password'}
                      InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                          {show ? <VisIcon /> : <VisOffIcon />}
                        </Pressable>
                      }
                      value={password}
                      onChangeText={text => setPassword(text)}
                    />
                  </FormControl>
                </InputGroup>
                <Link
                  _text={{
                    fontSize: 'sm',
                    color: '#8B5CF6',
                    lineHeight: '16',
                  }}
                  alignSelf="flex-end"
                  mt={6}
                  isUnderlined={false}
                  onPress={() => navigation.navigate('RestorePasswordElement')}>
                  Не помню пароль
                </Link>
              </Box>
            </VStack>
            <HStack
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              ml={4}>
              <Checkbox
                variant="underline"
                size="lg"
                borderRadius={1}
                colorScheme="purple"
                onChange={() => setMemory(prev => !prev)}
                isChecked={memory}
                value="memory">
                <Text ml={2}>Запомнить меня</Text>
              </Checkbox>
            </HStack>
            <Pressable
              flex={1}
              w={320}
              h={56}
              mt={8}
              ml={3}
              onPress={handleLogin}>
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
                    p={4}>
                    <Text
                      style={[{color: isPressed ? '#1559D7' : '#FFFFFF'}]}
                      fontSize={18}>
                      Войти
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
