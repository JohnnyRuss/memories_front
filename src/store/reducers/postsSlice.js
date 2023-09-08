import {
  initialStatus,
  controlStatus as status,
} from "./helpers/controlStatus";
import { createSlice } from "@reduxjs/toolkit";
import * as postsAPI from "store/thunks/posts.thunk";

const initialState = {
  posts: [],

  createPostLoadingStatus: initialStatus,
  postsLoadingStatus: initialStatus,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postsAPI.createPostQuery.pending, (state, { payload }) => {
        state.createPostLoadingStatus = status("loading");
      })
      .addCase(postsAPI.createPostQuery.fulfilled, (state, { payload }) => {
        console.log({ payload });
        state.createPostLoadingStatus = status("success");
      })
      .addCase(postsAPI.createPostQuery.rejected, (state, { payload }) => {
        console.log(payload);
        state.createPostLoadingStatus = status("fail");
      });
    builder
      .addCase(postsAPI.getPostsQuery.pending, (state, { payload }) => {
        // console.log({ pending: true });
        state.postsLoadingStatus = status("pending");
      })
      .addCase(postsAPI.getPostsQuery.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.postsLoadingStatus = status("success");
      })
      .addCase(postsAPI.getPostsQuery.rejected, (state, { payload }) => {
        console.log(payload);
        state.postsLoadingStatus = status("fail");
      });
  },
});

export default postsSlice.reducer;
export const postActions = postsSlice.actions;
