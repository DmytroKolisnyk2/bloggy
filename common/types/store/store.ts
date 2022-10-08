import type { CurrentPostState } from 'store/current-post';
import type { PostsState } from 'store/posts';

export interface RootState {
  posts: PostsState;
  currentPost: CurrentPostState;
}
