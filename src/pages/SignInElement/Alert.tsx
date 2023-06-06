import {VStack, HStack, IconButton, CloseIcon, Text, Alert, Box} from 'native-base';
import {FC} from 'react';
import {useAuthStore} from '../../store/useAuthStore';

export const AlertMessage: FC = () => {
  const resetLoginRequestStatus = useAuthStore(
    state => state.resetLoginRequestStatus,
  );

  return (
    
    <Alert status="error" flexDirection="row" h={16} justifyContent="space-evenly">
        <Alert.Icon />
        <Text
          fontSize="sm"
          ml={3}
          _dark={{
            color: 'coolGray.800',
          }}>
          Неправильный логин или пароль
        </Text>

        <IconButton
        ml={3}
        mt={0.5}
          _focus={{
            borderWidth: 0,
          }}
          icon={<CloseIcon size="3" />}
          _icon={{
            color: 'coolGray.600',
          }}
          onPress={() => resetLoginRequestStatus()}
        />
    </Alert>
  );
};
