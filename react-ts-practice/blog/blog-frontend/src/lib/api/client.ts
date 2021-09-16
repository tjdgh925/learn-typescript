import axios from 'axios';
import { loginData } from '../../types/types';
const client = axios.create();

// export const loginTry = ({ username, password }: loginData) =>
//   client.post('/api/auth/login', { username, password });

export default client;
