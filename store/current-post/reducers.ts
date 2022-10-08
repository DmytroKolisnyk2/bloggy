import { createReducer } from '@reduxjs/toolkit';
import type { HydrateAction, IPost } from '@types';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { getPost } from './actions';

export interface CurrentPostState {
  item: IPost;
  error: string;
  loading: boolean;
}

const item = createReducer(null, {
  [getPost.rejected.type]: () => null,
  [getPost.fulfilled.type]: (_, { payload }) => payload,
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

const error = createReducer('', {
  [getPost.pending.type]: () => '',
  [getPost.rejected.type]: (_, { payload }) => payload,
});

export const currentPostReducer = combineReducers({
  item,
  error,
  loading,
});
