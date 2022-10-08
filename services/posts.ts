import { ApiRoutes } from '@enums';
import type { IPost, PostDto } from '@types';
import { axios } from '@utils';

export const getPosts = (withComments = true): Promise<IPost[]> => {
  const params = withComments ? { _embed: 'comments' } : null;

  return axios
    .get<IPost[]>(ApiRoutes.POSTS, { params })
    .then((res) => res.data);
};

export const getPostById = (
  postId: number,
  withComments = true,
): Promise<IPost> => {
  const params = withComments ? { _embed: 'comments' } : null;
  const url = ApiRoutes.POSTS + `/${postId}`;

  return axios.get<IPost>(url, { params }).then((res) => res.data);
};

export const createPost = (post: PostDto): Promise<IPost> =>
  axios.post<IPost>(ApiRoutes.POSTS, post).then((res) => res.data);

export const updatePost = (
  postId: number,
  updatedPost: Partial<PostDto>,
): Promise<IPost> => {
  const url = ApiRoutes.POSTS + `/${postId}`;

  return axios.put<IPost>(url, updatedPost).then((res) => res.data);
};

export const deletePost = (
  postId: number,
): Promise<Record<string, unknown>> => {
  const url = ApiRoutes.POSTS + `/${postId}`;

  return axios.delete(url).then((res) => res.data);
};
