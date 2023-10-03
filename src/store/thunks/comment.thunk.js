import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublicQuery, axiosPrivateQuery } from "services/axios";

export const addCommentQuery = createAsyncThunk(
  "comments/create",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivateQuery.post(
        `/comments/post/${args.postId}`,
        { text: args.text }
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const getPostCommentsQuery = createAsyncThunk(
  "comments/getPostComments",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.get(
        `/comments/post/${args.postId}`
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const deleteCommentQuery = createAsyncThunk(
  "comments/deleteComment",
  async (args, { rejectWithValue }) => {
    try {
      await axiosPrivateQuery.delete(`/comments/${args.commentId}`);
      return args;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const reactOnCommentQuery = createAsyncThunk(
  "comments/reactOnComment",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivateQuery.patch(
        `/comments/${args.commentId}/reaction`
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);
