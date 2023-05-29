import React, {FC} from 'react';
import {Image, Box, Stack, Pressable, Center, Text} from 'native-base';

export const Background: FC = () => {
  return (
    <Stack w="100%" h="100%" position="absolute" zIndex={-1}>
      <Box
          h="20%"
          bg={{
            linearGradient: {
              colors: ['#AB87EA', '#4F7FDA'],
              start: [0, 0],
              end: [1, 0],
            },
          }}
          p={4}>
          <Box flexDirection="row" justifyContent="space-between">
            <Image
              source={require('../../../assets/images/logoCampus.png')}
              alt="CampusLogo"
              top={6}
            />  
            <Image
              source={require('../../../assets/images/logoMGMSU.png')}
              alt="logoMGMSU"
              top={2}
              size={16}
            />
            </Box>
      </Box>
    </Stack>
  );
};
