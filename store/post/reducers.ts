import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export interface PostState {
  post: null;
  error: string;
  loading: boolean;
}

const loading = createReducer(false, {});

const error = createReducer("", {});

export const postReducer = combineReducers({
  error,
  loading,
});
