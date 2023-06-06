import React, {FC, useEffect} from 'react';
import {Box, VStack, Text, Center} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import {LogoSplashScreen} from '../../shared/ui/icons/LogoSplashScreen';
import { RouteParamsList, RoutesEnum } from '../../shared/types';
import { SignInElement } from '../SignInElement/SignInElement';

type Props = NativeStackNavigationProp<RouteParamsList,RoutesEnum.SPLASH_SCREEN>

export const SplashScreen: FC = () => {

  const navigation = useNavigation<Props>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(RoutesEnum.SIGNIN);
    }, 1500);
  }, []);

  return (
    <VStack w="100%" h="100%" background="#EEF0F3">
      <Box flexDirection="row-reverse" mt={6} flexWrap="wrap">
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={2}
          borderColor="#FFFFFF"
          borderWidth={2}></Box>
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={1}
          borderColor="#FFFFFF"
          borderWidth={2}></Box>
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={1}
          borderColor="#FFFFFF"
          borderWidth={2}></Box>
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={2}
          mt={1}
          borderColor="#FFFFFF"
          borderWidth={2}></Box>
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={1}
          mt={1}
          borderColor="#FFFFFF"
          borderWidth={2}></Box>
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={2}
          mt={1}
          borderColor="#EEF0F3"></Box>
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={2}
          mt={1}
          borderColor="#FFFFFF"
          borderWidth={2}></Box>
      </Box>
      <Center>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          borderBottomColor="#8B5CF6"
          borderBottomWidth={3}
          mt={10}
          w={167}
          pb={2}>
          <Text fontSize="4xl" color="#8B5CF6">
            КАМПУС
          </Text>
        </Box>
      </Center>
      <Box
        position="absolute"
        bottom={0}
        w="100%"
        h="15%"
        bg={{
          linearGradient: {
            colors: ['#AB87EA', '#4F7FDA'],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        p={4}></Box>
    </VStack>
  );
};
