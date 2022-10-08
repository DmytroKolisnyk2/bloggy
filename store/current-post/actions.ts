import { createAsyncThunk } from '@reduxjs/toolkit';
import { createComment, getPostById } from '@services';
import type { CommentDto } from '@types';
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
export const addComment = createAsyncThunk(
  CurrentPostActions.ADD_COMMENT,
  async (comment: CommentDto, { rejectWithValue }) => {
    try {
      return await createComment(comment);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);
