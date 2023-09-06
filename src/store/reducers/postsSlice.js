import { createSlice } from "@reduxjs/toolkit";
import * as postsAPI from "store/thunks/posts.thunk";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postsAPI.createPostQuery.pending, (state, { payload }) => {})
      .addCase(postsAPI.createPostQuery.fulfilled, (state, { payload }) => {
        console.log({ payload });
      })
      .addCase(postsAPI.createPostQuery.rejected, (state, { payload }) => {});
    builder
      .addCase(postsAPI.getPostsQuery.pending, (state, { payload }) => {
        // console.log({ pending: true });
      })
      .addCase(postsAPI.getPostsQuery.fulfilled, (state, { payload }) => {
        state.posts = payload;
      })
      .addCase(postsAPI.getPostsQuery.rejected, (state, { payload }) => {
        // console.log({ error: true });
      });
  },
});

export default postsSlice.reducer;
export const postActions = postsSlice.actions;
