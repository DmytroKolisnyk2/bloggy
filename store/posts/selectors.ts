import type { RootState } from '@types';

export const postLoadingSelector = (state: RootState) => state.posts.loading;
export const postErrorSelector = (state: RootState) => state.posts.error;
export const postsSelector = (state: RootState) => state.posts.items;
