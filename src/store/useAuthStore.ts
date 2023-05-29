import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type AuthStoreType = {
  accessToken: string | null;
  memory : boolean;
  isAuthenticated: boolean;
};

type AuthActionsType = {
  login: (accessToken: string, memory: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStoreType & AuthActionsType>()(
    immer((set) => ({
      accessToken: AsyncStorage.getItem('accessToken') || AsyncStorage.getItem('accessToken') || null,
      memory: false,
      login: (accessToken, memory) => {
        set((state) => ({
            ...state,
            accessToken,
            memory,
        }));
        (!memory ? AsyncStorage.setItem("accessToken", accessToken) : AsyncStorage.setItem('accessToken', accessToken));
      },
    })),

);

