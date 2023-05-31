import React, {FC, useEffect} from 'react';
import {Box, VStack, Text, Center} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';
import {LogoSplashScreen} from '../../../assets/icons/LogoSplashScreen';
import { RootStackParamList } from '../../RootStackParams';

type SplashScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

export const SplashScreen: FC = () => {

    const navigation = useNavigation<SplashScreenProp>(); 

useEffect(() => {
    setTimeout(() => {
        navigation.navigate('SignInElement')
    }, 2000)
}, [])

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
          mr={2}
          borderColor="#FFFFFF"
          borderWidth={2}></Box>
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
          mr={2}
          mt={2}
          borderColor="#FFFFFF"
          borderWidth={2}></Box>
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={2}
          mt={2}
          borderColor="#FFFFFF"
          borderWidth={2}></Box>
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={2}
          mt={2}
          borderColor="#EEF0F3"></Box>
        <Box
          background="transparent"
          w={109}
          h={109}
          mr={2}
          mt={2}
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
          pb={4}>
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
