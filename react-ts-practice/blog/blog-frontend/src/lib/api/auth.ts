import { loginData, signUpData } from '../../types/types';
import client from './client';

// 로그인
export const login = ({ username, password }: loginData) =>
  client.post('/api/auth/login', { username, password });

// 회원가입
export const register = ({ username, password }: signUpData) =>
  client.post('/api/auth/register', { username, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
