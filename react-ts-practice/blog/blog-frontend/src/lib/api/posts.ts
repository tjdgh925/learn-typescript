import client from './client';
import { postData } from '../../types/types';
export async function writePost({ title, body, tags }: postData) {
  const response = await client.post('/api/posts', { title, body, tags });
  return response.data;
}
