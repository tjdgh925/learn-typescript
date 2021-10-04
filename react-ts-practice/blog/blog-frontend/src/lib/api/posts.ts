import client from './client';
import { postData } from '../../types/types';
import axios from 'axios';

export async function writePost({ title, body, tags }: postData) {
  const response = await client.post('/api/posts', { title, body, tags });
  return response.data;
}

export async function readPost(id: string) {
  const response = await client.get(`api/posts/${id}`);
  return response;
}
