import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { login, getUser} from '../api/api'

type AuthStoreType = {
  accessToken: Promise<string | null>;
  memory : boolean;
  userId: Promise<string | null>
};

type AuthActionsType = {
  login: (accessToken: string, memory: boolean, userId: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStoreType & AuthActionsType>()(
    immer((set) => ({
      accessToken: AsyncStorage.getItem('accessToken') || null,
      memory: false,
      userId: AsyncStorage.getItem('userId') || null,
      login: (accessToken, memory, userId) => {
        set((state) => ({
            ...state,
            accessToken,
            memory,
            userId
        }));
        (!memory ? AsyncStorage.setItem("accessToken", accessToken) : AsyncStorage.setItem('accessToken', accessToken));
      },
      logout: () => {
        set(() => ({accessToken: ''}));
      }
    })),

);





