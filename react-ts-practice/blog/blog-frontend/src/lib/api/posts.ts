import client from './client';
import { postData } from '../../types/types';

export async function writePost({ title, body, tags }: postData) {
  const response = await client.post('/api/posts', { title, body, tags });
  return response.data;
}

export async function readPost(id: string) {
  const response = await client.get(`/api/posts/${id}`).then((response) => {
    return response.data;
  });
  return response;
}
