import React, {FC, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthStore, CurrentUser} from '../../store/useAuthStore';
import {
  Image,
  Box,
  Stack,
  Pressable,
  Center,
  Text,
  VStack,
  Collapse,
  ScrollView,
} from 'native-base';
import {RouteParamsList, RoutesEnum} from '../../shared';
import {ShevronDownIcon} from '../../shared/ui/icons/ShevronDownIcon';
import {PhoneIcon} from '../../shared/ui/icons/PhoneIcon';
import {EmailIcon} from '../../shared/ui/icons/EmailIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QrIcon} from '../../shared/ui';
import {ShevronUpIcon} from '../../shared/ui/icons/ShevronUpIcon';
import {SignOutIcon} from '../../shared/ui/icons/SignOutIcon';

// type PropsTab = BottomTabScreenProps<RouteParamsList, RoutesEnum.PROFILE>;
type PropsNav = NativeStackNavigationProp<RouteParamsList, RoutesEnum.PROFILE>;

export type User = {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  birthDate: string;
  phoneNumber: string;
  male: boolean;
  snils: string;
  birthPlace: string;
  login: string;
  isActive: boolean;
};

export const Profile: FC = () => {
  const logout = useAuthStore(state => state.logout);
  const navigation = useNavigation<PropsNav>();
  const currentUser = useAuthStore(state => state.currentUser);
  const getUserInfo = useAuthStore(state => state.getUserInfo);
  const accessToken = useAuthStore(state => state.accessToken);

  const [showMore, setShowMore] = useState(false);

  const handleLogout = () => {
    logout();
    navigation.replace(RoutesEnum.SIGNIN);
  };

  useEffect(() => {
    console.log(currentUser);
    const asyncfn = async () => {
      if (!currentUser) {
        const accessToken = await AsyncStorage.getItem('accessToken');
        console.log(accessToken);
        if (accessToken) {
          getUserInfo(accessToken);
        } else {
          console.log('нет данных');
        }
      }
    };
    asyncfn();
  }, []);

  return (
    <Stack w="100%" h="100%">
      <Box
        h="13%"
        flexDirection="row"
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
          Профиль
        </Text>
        <Box position="absolute" right={4}>
          <Pressable onPressOut={handleLogout}>
            <SignOutIcon focused={false} color={''} size={8} />
          </Pressable>
        </Box>
      </Box>
      <Center>
        <Box
          w={104}
          h={104}
          mt={4}
          justifyContent="center"
          alignItems="center"
          bg={{
            linearGradient: {
              colors: ['#AB87EA', '#4F7FDA'],
              start: [0, 0],
              end: [1, 0],
            },
          }}>
          <Text fontSize={40} fontWeight={700} color="#F9FAFB">
            {`${currentUser?.lastName.slice(0,1)} ${currentUser?.firstName.slice(0,1)}`}
          </Text>
        </Box>
      </Center>
      <VStack space={4} mt={4} marginX={2}>
        <Box>{`${currentUser?.lastName} ${currentUser?.firstName} ${currentUser?.middleName}`}</Box>
        <Box>{`${currentUser?.phoneNumber.slice(
          0,
          1,
        )} (${currentUser?.phoneNumber.slice(
          1,
          4,
        )}) ${currentUser?.phoneNumber.slice(
          4,
          7,
        )}-${currentUser?.phoneNumber.slice(
          7,
          9,
        )}-${currentUser?.phoneNumber.slice(9, 11)}`}</Box>
        <Box>{currentUser?.email}</Box>
        <Box>{'МГМСУ/Клиническая психология/1 курс/1.3-Б1/Б'}</Box>
        <Box>
          {'РГСУ/Социальной работы магистратура (заочное отделение)/3 курс'}
        </Box>
      </VStack>
      <Box
        w="92%"
        h="8%"
        mt={2}
        ml={2}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        bg={{
          linearGradient: {
            colors: ['#AB87EA', '#4F7FDA'],
            start: [0, 0],
            end: [1, 0],
          },
        }}>
        <Text color="#F8FBFF" fontSize={18}>
          Связаться с нами
        </Text>
        <Pressable onPress={() => setShowMore(value => !value)}>
          {showMore === true ? (
            <ShevronUpIcon focused={false} color="#F8FBFF" size={24} />
          ) : (
            <ShevronDownIcon focused={false} color="#F8FBFF" size={24} />
          )}
        </Pressable>
      </Box>
      <Collapse isOpen={showMore}>
        <Box
          borderColor="#B292F9"
          borderWidth={1}
          justifyContent="space-evenly"
          bg="#FFFFFF"
          w="92%"
          ml={2}
          h={16}>
          <ScrollView w={['100%', '100%']} h={16}>
            <VStack space={2}>
              <Box flexDirection="row" alignItems="center" pl={1}>
                <PhoneIcon focused={false} color={''} size={6} />
                <Text ml={1} fontSize={14}>
                  +7(906) 555-01-68
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center" pl={1}>
                <EmailIcon focused={false} color={''} size={6} />
                <Text ml={1} fontSize={14}>
                  gjkdkmmpkhjhg@ghjjn.ru
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center" pl={1}>
                <PhoneIcon focused={false} color={''} size={6} />
                <Text ml={1} fontSize={14}>
                  +7(906) 555-01-68
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center" pl={1}>
                <EmailIcon focused={false} color={''} size={6} />
                <Text ml={1} fontSize={14}>
                  gjkdkmmpkhjhg@ghjjn.ru
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center" pl={1}>
                <PhoneIcon focused={false} color={''} size={6} />
                <Text ml={1} fontSize={14}>
                  +7(906) 555-01-68
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center" pl={1}>
                <EmailIcon focused={false} color={''} size={6} />
                <Text ml={1} fontSize={14}>
                  gjkdkmmpkhjhg@ghjjn.ru
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center" pl={1}>
                <PhoneIcon focused={false} color={''} size={6} />
                <Text ml={1} fontSize={14}>
                  +7(906) 555-01-68
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center" pl={1}>
                <EmailIcon focused={false} color={''} size={6} />
                <Text ml={1} fontSize={14}>
                  gjkdkmmpkhjhg@ghjjn.ru
                </Text>
              </Box>
            </VStack>
          </ScrollView>
        </Box>
      </Collapse>
      {/* <Pressable w="92%" mt={2} ml={2} >
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
              p={2}>
              <Text
                style={[{color: isPressed ? '#1559D7' : '#FFFFFF'}]}
                fontSize={18}
                fontWeight={500}>
                Выйти
              </Text>
            </Box>
          );
        }}
      </Pressable> */}
      <Pressable
        position="absolute"
        flexDirection="column"
        bottom={0}
        mb={1}
        ml={2}
        onPress={() => navigation.replace(RoutesEnum.PASS)}>
        <Box>
          <QrIcon />
          <Text color="#233A5A">Пропуск</Text>
        </Box>
      </Pressable>
    </Stack>
  );
};
