import { RootState } from "@types";

export const currentPostLoadingSelector = (state: RootState) => state.currentPost.loading;
export const commentsLoadingSelector = (state: RootState) => state.currentPost.commentsLoading;
export const currentPostErrorSelector = (state: RootState) => state.currentPost.error;
export const currentPostSelector = (state: RootState) => state.currentPost.item;
