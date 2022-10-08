import { ApiRoutes } from '@enums';
import type { CommentDto, IComment } from '@types';
import { axios } from '@utils';

export const createComment = (comment: CommentDto): Promise<IComment> =>
  axios.post<IComment>(ApiRoutes.COMMENTS, comment).then((res) => res.data);
