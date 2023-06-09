import {VStack, HStack, IconButton, CloseIcon, Alert, Box} from 'native-base';
import {FC} from 'react';
import {useAuthStore} from '../../store/useAuthStore';
import {Text} from '../../shared/ui';

export const AlertMessage: FC = () => {
  const resetLoginRequestStatus = useAuthStore(
    state => state.resetLoginRequestStatus,
  );

  return (
    <Alert status="error">
      <HStack h={6} space={4} alignItems="center">
        <HStack space={2}>
          <Alert.Icon />
          <Box>
            <Text
              _dark={{
                color: 'coolGray.800',
              }}>
              Не правильный логин или пароль
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
          variant="unstyled"
          onPress={() => resetLoginRequestStatus()}
        />
      </HStack>
    </Alert>
  );
};
