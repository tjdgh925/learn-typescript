import client from './client';
import qs from 'qs';
import { postData, postListData } from '../../types/types';

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

export async function postsList({ page, username, tag }: postListData) {
  const queryString = qs.stringify([page, username, tag]);
  console.log(queryString);
  const response = await client
    .get(`/api/posts?${queryString}`)
    .then((response) => {
      return response.data;
    });
  return response;
}

export async function postAll() {
  const response = await client.get('/api/boards').then((response) => {
    return response;
  });
  return response;
}
