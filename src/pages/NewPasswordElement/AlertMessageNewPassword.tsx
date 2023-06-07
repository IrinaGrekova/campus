import {VStack, HStack, IconButton, CloseIcon,Alert, Box} from 'native-base';
import {FC} from 'react';
import {useAuthStore} from '../../store/useAuthStore';
import { Text } from '../../shared/ui';

export const AlertMessageNewPassword: FC = () => {




  return (
<Alert status="error" w={350}>
      <HStack h={6} space={24} alignItems="center">
        <HStack space={4}>
          <Alert.Icon />
          <Box>
            <Text
              _dark={{
                color: 'coolGray.800',
              }}>
              Пароли не совпадают
            </Text>
          </Box>
        </HStack>
        <IconButton
          _focus={{
            borderWidth: 0,
          }}
          icon={<CloseIcon size="3" />}
          _icon={{
            color: 'coolGray.600',
          }}
          onPress={() => {}}
        />
      </HStack>
    </Alert>
  );
};
