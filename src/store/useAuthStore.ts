import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import axios from 'axios';
import { getUserId } from '../shared/utils/getUserId';




type AuthStoreType = {
  accessToken: Promise<string | null>;
  userId: Promise<string | null>;
  loginRequestStatus: "initial" | "loading" | "success" | "error";
  getUserInfoStatus: "initial" | "loading" | "success" | "error";
  currentUser: CurrentUser | null;
};

type AuthActionsType = {
  login: (accessToken: string, userId: string) => void;
  logout: () => void;
  loginRequest: (email: string, password: string) => Promise<void>;
  resetLoginRequestStatus: () => void;
  setUserData: (currentUser: CurrentUser) => void;
  getUserInfo: (accessToken: string) => void;
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
      getUserInfoStatus: "initial",
      // синхронные экшены
      login: (accessToken, userId) => {
        set((state) => ({
            ...state,
            accessToken,
            userId
        }));
      },
      logout: () => {
        set(() => ({accessToken: ''}));
        set(() => ({currentUser: null}))
      },
      resetLoginRequestStatus: () => {
        set((state) => ({...state, loginRequestStatus: "initial"}))
      },
      setUserData: (currentUser) => {set((state) => {
        (state.currentUser = currentUser);
      });
        
      },
      // асинхронные экшены
      loginRequest: async (email: string, password: string) => {

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

          set((state) => {state.loginRequestStatus = "success"});

          const {accessToken} = response.data;
          AsyncStorage.setItem("accessToken", accessToken);

         set((state) => {
          state.getUserInfo(accessToken)
         });
          
        } catch (error) {
          set((state) => {state.loginRequestStatus = "error"});
          console.log(error);
        }
      },
      getUserInfo: async (accessToken: string) => {
        try{
          set((state) => {state.getUserInfoStatus = "loading"});

          const userId = getUserId(accessToken);
          const response = await axios
            .get(`http://localhost:5001/api/v1/internal/users/${userId}`)
          const currentUser = response.data;
          set((state: AuthStoreType) => {
            state.currentUser = currentUser;
          });
          set((state) => {state.getUserInfoStatus = "success"});
        }catch(error){
          console.log(error);
          set((state) => {state.getUserInfoStatus = "error"})
        }
      },
    })),
);




