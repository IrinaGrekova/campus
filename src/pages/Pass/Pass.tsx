import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RouteParamsList, RoutesEnum} from '../../shared';
import {Image, Box, HStack, Text, Pressable} from 'native-base';
import { Profile } from '../Profile/Profile';
import { UserIcon } from '../../shared/ui';

type PropsTab = BottomTabScreenProps<RouteParamsList, RoutesEnum.PASS>;
type PropsNav = NativeStackNavigationProp<RouteParamsList, RoutesEnum.PROFILE>

export const Pass: FC = () => {
  const navigation = useNavigation<PropsNav>();

  return (
    <>
      <Box w="100%">
        <Box
          h="13%"
          justifyContent="center"
          alignItems="center"
          bg={{
            linearGradient: {
              colors: ['#AB87EA', '#4F7FDA'],
              start: [0, 0],
              end: [1, 0],
            },
          }}>
          <Text fontWeight={700} fontSize={24} color="#F9FAFB">
            Пропуск
          </Text>
        </Box>
        <Box
          position="absolute"
          w={325}
          h={320}
          top={248}
          left={25}>
          <Box
            position="absolute"
            borderLeftColor="#3578F4"
            borderLeftWidth={3}
            borderTopColor="#3578F4"
            borderTopWidth={3}
            w={24}
            h={24}></Box>
          <Box position="absolute"
            borderRightColor="#3578F4"
            borderRightWidth={3}
            borderTopColor="#3578F4"
            borderTopWidth={3}
            w={24}
            h={24}
            right={0}></Box>
          <Box position="absolute"
            borderLeftColor="#3578F4"
            borderLeftWidth={3}
            borderBottomColor="#3578F4"
            borderBottomWidth={3}
            w={24}
            h={24}
            left={0}
            bottom={0}></Box>
          <Box position="absolute"
            borderRightColor="#3578F4"
            borderRightWidth={3}
            borderBottomColor="#3578F4"
            borderBottomWidth={3}
            w={24}
            h={24}
            right={0}
            bottom={0}></Box>
        </Box>
        <Box flexDirection="column" alignItems="center">
          <Image
            source={require('../../../assets/images/passLogo.png')}
            alt="MGMSULogo"
            mt={6}
            size={24}
          />
          <Box>
            <Image
              source={require('../../../assets/images/qrCode.png')}
              alt="QR-code"
              mt={6}
              size={72}
            />
          </Box>
        </Box>
      </Box>
      <Pressable
        position="absolute"
        flexDirection="column"
        bottom={0}
        mb={1}
        ml={2}
        onPress = {() => navigation.replace(RoutesEnum.PROFILE)}>
        <Box>
          <UserIcon />
          <Text color="#233A5A">Профиль</Text>
        </Box>
      </Pressable>
    </>
  );
};
