import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPostById } from '@services';
import { CurrentPostActions } from './action-types';

export const getPost = createAsyncThunk(
  CurrentPostActions.GET_POST,
  async (id: number, { rejectWithValue }) => {
    try {
      return await getPostById(id);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
