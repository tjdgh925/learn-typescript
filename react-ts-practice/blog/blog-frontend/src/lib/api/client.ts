import axios from 'axios';

const client = axios.create();

// export const loginTry = ({ username, password }: loginData) =>
//   client.post('/api/auth/login', { username, password });

export default client;
