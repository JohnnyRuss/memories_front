import {
  initialStatus,
  controlStatus as status,
} from "./helpers/controlStatus";
import { createSlice } from "@reduxjs/toolkit";
import * as commentsAPI from "../thunks/comment.thunk";

const initialState = {
  comments: [],
  status: initialStatus,
  modifyCommentStatus: initialStatus,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(commentsAPI.addCommentQuery.pending, (state) => {
        state.modifyCommentStatus = status("pending");
      })
      .addCase(commentsAPI.addCommentQuery.fulfilled, (state, { payload }) => {
        state.comments.push(payload);
        state.modifyCommentStatus = status("success");
      })
      .addCase(commentsAPI.addCommentQuery.rejected, (state, { payload }) => {
        console.log(payload);
        state.modifyCommentStatus = status("fail", payload.message);
      });
    builder
      .addCase(commentsAPI.getPostCommentsQuery.pending, (state) => {
        state.status = status("pending");
      })
      .addCase(
        commentsAPI.getPostCommentsQuery.fulfilled,
        (state, { payload }) => {
          state.comments = payload;
          state.status = status("success");
        }
      )
      .addCase(
        commentsAPI.getPostCommentsQuery.rejected,
        (state, { payload }) => {
          console.log(payload);
          state.status = status("fail", payload.message);
        }
      );
    builder
      .addCase(commentsAPI.deleteCommentQuery.pending, (state) => {
        state.modifyCommentStatus = status("pending");
      })
      .addCase(
        commentsAPI.deleteCommentQuery.fulfilled,
        (state, { payload }) => {
          state.modifyCommentStatus = status("success");
        }
      )
      .addCase(
        commentsAPI.deleteCommentQuery.rejected,
        (state, { payload }) => {
          console.log(payload);
          state.modifyCommentStatus = status("fail", payload.message);
        }
      );
    builder
      .addCase(commentsAPI.reactOnCommentQuery.pending, (state) => {})
      .addCase(
        commentsAPI.reactOnCommentQuery.fulfilled,
        (state, { payload }) => {}
      )
      .addCase(
        commentsAPI.reactOnCommentQuery.rejected,
        (state, { payload }) => {
          console.log(payload);
        }
      );
  },
});

export const commentActions = commentsSlice.actions;
export default commentsSlice.reducer;
