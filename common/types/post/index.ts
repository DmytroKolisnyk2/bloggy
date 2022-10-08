import type { IComment } from '../comment';

export interface IPost {
  id: number;
  title: string;
  body: string;
  comments?: IComment[];
}

export type PostDto = Pick<IPost, 'title' | 'body'>;
