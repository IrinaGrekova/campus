import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../RootStackParams';
import {
  Image,
  Box,
  Stack,
  Pressable,
  Center,
  Text,
  VStack,
  Heading,
} from 'native-base';

type ProfileScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

export const Profile: FC = () => {
  const navigation = useNavigation<ProfileScreenProp>();

  return (
    <Stack w="100%" h="100%">
      <Box
        h="72px"
        justifyContent="center"
        alignItems="center"
        bg={{
          linearGradient: {
            colors: ['#AB87EA', '#4F7FDA'],
            start: [0, 0],
            end: [1, 0],
          },
        }}
        p={4}>
        <Text fontFamily="Raleway-Regular" fontSize={24} color="#F9FAFB">
          Профиль
        </Text>
      </Box>
      <Center>
        <Box
          w={104}
          h={104}
          mt={35}
          justifyContent="center"
          alignItems="center"
          bg={{
            linearGradient: {
              colors: ['#AB87EA', '#4F7FDA'],
              start: [0, 0],
              end: [1, 0],
            },
          }}>
          <Text fontFamily="Raleway-Regular" fontSize={40} color="#F9FAFB">
            E A
          </Text>
        </Box>
      </Center>
      <VStack space={8} mt={8} marginX={6}>
        <Box>Ефремова Альбина Денисовна</Box>
        <Box>+7 (906) 555-01-33</Box>
        <Box>МГМСУ/Клиническая психология/1 курс/1.3-Б1/Б</Box>
        <Box>
          РГСУ/Социальной работы магистратура (заочное отделение)/3 курс/1.2
          -А4/А
        </Box>
      </VStack>
      <Pressable
        flex={1}
        w={320}
        mt={12}
        ml={6}
        onPress={() => navigation.navigate('SignInElement')}>
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
                Выйти
              </Text>
            </Box>
          );
        }}
      </Pressable>
    </Stack>
  );
};
