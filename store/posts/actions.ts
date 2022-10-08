import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '@services';
import { PostActions } from './action-types';

export const getAllPosts = createAsyncThunk(
  PostActions.GET_POSTS,
  async (_, { rejectWithValue }) => {
    try {
      return await getPosts();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
