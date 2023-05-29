import axios from 'axios';
import { Buffer } from 'buffer';
import {useAuthStore} from '../store/useAuthStore';

export const apiHostToken = 'http://localhost:5000/api/v1/auth/signin';
export const apiHostUser = 'http://localhost:5001/api/v1/internal/users';


export const login = (email: string, password: string) =>
  axios.post(apiHostToken, { loginOrEmail: email, password: password });

export const getUser = (userId: number, accessToken: string) =>
  axios.get(`${apiHostUser}/${userId}`, { headers: { Authorization: `Bearer ${accessToken}` }});

