export interface IComment {
  id: number;
  postId: number;
  body: string;
}
export type CommentDto = Omit<IComment, 'id'>;
