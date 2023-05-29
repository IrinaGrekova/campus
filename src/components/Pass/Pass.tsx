import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../RootStackParams';
import {Image, Box, HStack, Text} from 'native-base';

type PassScreenProp = NativeStackNavigationProp<RootStackParamList, 'Pass'>;

export const Pass: FC = () => {
  const navigation = useNavigation<PassScreenProp>();

  return (
    <>
      <Box w="100%">
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
            Пропуск
          </Text>
        </Box>
        <Box flexDirection="column" alignItems="center">
          <Image
            source={require('../../../assets/images/passLogo.png')}
            alt="MGMSULogo"
            mt={6}
            size={32}
          />
          <Box>
            <Image
              source={require('../../../assets/images/qrCode.png')}
              alt="QR-code"
              size={64}
            />
          </Box>
        </Box>
        <Box mt={2}>
          <Box flexDirection="row" justifyContent="center">
            <Text>Состояние: </Text>
            <Text color="#8B5CF6">В УЧРЕЖДЕНИИ</Text>
          </Box>
          <Box flexDirection="row" justifyContent="center">
            <Text>Проход зафиксирован: </Text>
            <Text color="#8B5CF6">08:58 09.03.2023</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
