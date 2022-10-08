import { createReducer } from '@reduxjs/toolkit';
import type { HydrateAction, IPost } from '@types';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { addComment, getPost } from './actions';

export interface CurrentPostState {
  item: IPost;
  error: string;
  loading: boolean;
  commentsLoading: boolean;
}

const item = createReducer(null, {
  [getPost.rejected.type]: () => null,
  [getPost.fulfilled.type]: (_, { payload }) => payload,
  [addComment.fulfilled.type]: (state: IPost, { payload }) => ({
    ...state,
    comments: [...state.comments, payload],
  }),
  [HYDRATE](_, { payload }: HydrateAction) {
    const { item } = payload.currentPost;
    if (item) {
      return item;
    }
  },
});

const loading = createReducer(false, {
  [getPost.pending.type]: () => true,
  [getPost.rejected.type]: () => false,
  [getPost.fulfilled.type]: () => false,
});

const commentsLoading = createReducer(false, {
  [addComment.pending.type]: () => true,
  [addComment.rejected.type]: () => false,
  [addComment.fulfilled.type]: () => false,
});

const error = createReducer('', {
  [getPost.pending.type]: () => '',
  [getPost.rejected.type]: (_, { payload }) => payload,
  [HYDRATE](_, { payload }: HydrateAction) {
    const { error } = payload.posts;

    return error || '';
  },
});

export const currentPostReducer = combineReducers({
  commentsLoading,
  item,
  error,
  loading,
});
