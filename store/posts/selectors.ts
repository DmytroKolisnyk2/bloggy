import type { RootState } from '@types';

export const postsLoadingSelector = (state: RootState) => state.posts.loading;
export const postsErrorSelector = (state: RootState) => state.posts.error;
export const postsSelector = (state: RootState) => state.posts.items;
