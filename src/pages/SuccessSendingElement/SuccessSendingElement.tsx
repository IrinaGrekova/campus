/* prettier-ignore */
import { FC } from 'react';
import {Box, Stack, Image, ZStack} from 'native-base';


export const SuccessSendingElement: FC = () => {

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
          <Box
            mt={20}
            _text={{
              textAlign: 'center',
            }}>
            Сообщение успешно отправлено. Пожалуйста, следуйте инструкциям в
            письме.
          </Box>
        </Box>
      </ZStack>
    </>
  );
};
