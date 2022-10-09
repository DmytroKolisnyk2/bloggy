import { createReducer } from '@reduxjs/toolkit';
import type { HydrateAction, IPost } from '@types';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { getAllPosts } from './actions';

export interface PostsState {
  items: IPost[];
  error: string;
  loading: boolean;
}

const items = createReducer([], {
  [getAllPosts.rejected.type]: () => [],
  [getAllPosts.fulfilled.type]: (_, { payload }) => payload,
  [HYDRATE](_, { payload }: HydrateAction) {
    const { items } = payload.posts;
    if (items) {
      return items;
    }
  },
});

const loading = createReducer(false, {
  [getAllPosts.pending.type]: () => true,
  [getAllPosts.rejected.type]: () => false,
  [getAllPosts.fulfilled.type]: () => false,
});

const error = createReducer('', {
  [getAllPosts.pending.type]: () => '',
  [getAllPosts.rejected.type]: (_, { payload }) => payload,
  [HYDRATE](_, { payload }: HydrateAction) {
    const { error } = payload.posts;

    return error || '';
  },
});

export const postsReducer = combineReducers({
  items,
  error,
  loading,
});
