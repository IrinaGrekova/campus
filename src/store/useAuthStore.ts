import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import axios, { CanceledError } from 'axios';
import { Buffer } from 'buffer';



type AuthStoreType = {
  accessToken: Promise<string | null>;
  memory : boolean;
  userId: Promise<string | null>;
  loginRequestStatus: "initial" | "loading" | "success" | "error";
  currentUser: CurrentUser | null;
};

type AuthActionsType = {
  login: (accessToken: string, memory: boolean, userId: string) => void;
  logout: () => void;
  loginRequest: (email: string, password: string, memory: boolean) => Promise<void>;
  resetLoginRequestStatus: () => void;
  getUserData: (currentUser: CurrentUser) => void;
};
export type CurrentUser = {
  id: string,
  firstName: string,
  middleName?: string,
  lastName: string,
  email: string,
  birthDate: string,
  phoneNumber: string,
  male: boolean,
  snils: string,
  birthPlace: string,
  login: string,
  isActive: boolean,
}
type LoginType = {
  accessToken: string;
};

export const useAuthStore = create<AuthStoreType & AuthActionsType>()(
    immer((set) => ({
      accessToken: AsyncStorage.getItem('accessToken') || null,
      memory: false,
      userId: AsyncStorage.getItem('userId') || null,
      loginRequestStatus: "initial",
      currentUser: null,
      // синхронные экшены
      login: (accessToken, memory, userId) => {
        set((state) => ({
            ...state,
            accessToken,
            memory,
            userId
        }));
        (!memory && AsyncStorage.setItem("accessToken", accessToken));
      },
      logout: () => {
        set(() => ({accessToken: ''}));
        set(() => ({currentUser: null}))
      },
      resetLoginRequestStatus: () => {
        set((state) => ({...state, loginRequestStatus: "initial"}))
      },
      getUserData: (currentUser) => {
        set((state) => ({
          ...state, 
          currentUser
        }));
      },
      // асинхронные экшены
      loginRequest: async (email: string, password: string, memory: boolean) => {

        set((state) => {state.loginRequestStatus = "loading"});
        try {
          const response = await axios.post<LoginType>(
            'http://localhost:5000/api/v1/auth/signin',
            {
              loginOrEmail: email,
              password: password,
            }, {
              withCredentials: true
            }
          );
          const {accessToken} = response.data;
          const parts = accessToken
            .split('.')
            .map(part =>
              Buffer.from(
                part.replace(/-/g, '+').replace(/_/g, '/'),
                'base64',
              ).toString(),
            );
    
          const payload = JSON.parse(parts[1]);
    
          const userId = payload.sub;
    
          // console.log(accessToken);
          set((state: AuthActionsType) => {
            state.login(accessToken, memory, userId)
          });
          
    
          const userData = await axios.get(`http://localhost:5001/api/v1/internal/users/${userId}`);
          const { ...currentUser } = userData.data;

          

          set((state: AuthActionsType) => {
            state.getUserData({...currentUser})
          });
          

          set((state) => {state.loginRequestStatus = "success"});
          
        } catch (error) {
          set((state) => {state.loginRequestStatus = "error"});
          console.log(error);
        }
      }
    })),

);





