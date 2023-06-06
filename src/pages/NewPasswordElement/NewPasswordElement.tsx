/* prettier-ignore */
import { useState, FC } from 'react';
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
  Image,
} from 'native-base';

import {VisOffIcon} from '../../shared/ui/icons/VisOffIcon';
import {VisIcon} from '../../shared/ui/icons/VisIcon';

export const NewPasswordElement: FC = () => {
  const [show, setShow] = useState(false);

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
                    mt={2}
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
            <Pressable flex={1} w="100%" mt={4}>
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
