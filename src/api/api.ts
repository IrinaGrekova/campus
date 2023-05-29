// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';


// const BASE_URL = 'http://localhost:5000';

// interface AuthResponse {
//   data: {
//     user: {
//       id: string;
//       email: string;
//     };
//     accessToken: string; 
//   };
// }

// interface AccessTokenData {
//     userId: string;
//     email: string;
//     exp: number; // добавим свойство exp
//   }

// export const login = async (email: string, password: string) => {
//     const response = await axios.post<AuthResponse>(`${BASE_URL}/api/v1/auth/signin`, {
//       loginOrEmail: email,
//       password: password,
//     });
  
//     AsyncStorage.setItem('accessToken', response.data.data.accessToken);

//     return response.data;
//   };
  
//   export const logout = () => {
//     AsyncStorage.removeItem('accessToken');
//   };

//   export const getTokenData = async () => {
//     const accessToken = await AsyncStorage.getItem('accessToken');
  
//     if (!accessToken) {
//       return null;
//     }
  
//     const tokenData = JSON.parse(atob(accessToken.split('.')[1]));
//     return tokenData as {
//       userId: string;
//       email: string;
//       exp: number;
//     };
//   };