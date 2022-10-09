import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { currentPostReducer } from './current-post';
import { postsReducer } from './posts';
import { themeReducer } from './theme';

const makeStore = () =>
  configureStore({
    reducer: {
      posts: postsReducer,
      currentPost: currentPostReducer,
      theme: themeReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
