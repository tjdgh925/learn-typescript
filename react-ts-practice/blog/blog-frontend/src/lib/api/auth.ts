import { loginData, signUpData } from '../../types/types';
import client from './client';

export const login = ({ username, password }: loginData) =>
  client.post('/api/auth/login', { username, password });

// 회원가입
export const register = ({ username, password, sex, birth }: signUpData) =>
  client.post('/users/join', {
    username,
    password,
    sex,
    birth,
  });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
