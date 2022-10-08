import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { currentPostReducer } from './current-post';
import { postsReducer } from './posts';

const makeStore = () =>
  configureStore({
    reducer: {
      posts: postsReducer,
      currentPost: currentPostReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
