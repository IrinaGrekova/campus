/* prettier-ignore */
import { useState, FC } from 'react';
import {Background} from '../Background/Background';
import {
  Box,
  Pressable,
  Stack,
  Text,
  ZStack,
  VStack,
  Input,
  InputGroup,
  Heading,
} from 'native-base';

import {VisOffIcon} from '../../../assets/icons/VisOffIcon';
import {VisIcon} from '../../../assets/icons/VisIcon';

export const NewPasswordElement: FC = () => {
  const [show, setShow] = useState(false);
 

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
              marginTop={20}>
              <Box color="#EEF0F3">
                <Heading>
                  Введите новый пароль
                </Heading>
              </Box>
              <Box alignItems="center" flexDirection="column">
                <InputGroup flexDirection="column" alignItems="center" mt={6}>
                <Input
                    placeholder="Новый пароль"
                    type={show ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        {show ? <VisIcon /> : <VisOffIcon />}
                      </Pressable>
                    }
                  />
                  <Input
                    placeholder="Подтверждение пароля"
                    type={show ? 'text' : 'password'}
                    InputRightElement={
                      <Pressable onPress={() => setShow(!show)}>
                        {show ? <VisIcon /> : <VisOffIcon />}
                      </Pressable>
                    }
                  />
                </InputGroup>
              </Box>
            </VStack>
            <Pressable flex={1} w={320} mt={8} ml={3}>
              {({isPressed}) => {
                return (
                  <Box
                    alignItems="center"
                    // justifyContent="center"
                    // borderTopColor="#90B7FF"
                    // borderTopWidth={4}
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
