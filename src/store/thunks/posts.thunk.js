import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublicQuery, axiosPrivateQuery } from "services/axios";
import { POSTS_PER_PAGE } from "config/config";

export const createPostQuery = createAsyncThunk(
  "post/create",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivateQuery.post("/posts", args);

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response.data || error?.message || error,
      });
    }
  }
);

export const getPostQuery = createAsyncThunk(
  "post/get",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.get(`/posts/${args.postId}`);

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const updatePostQuery = createAsyncThunk(
  "post/update",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivateQuery.put(
        `/posts/${args.params.postId}`,
        args.data
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const deletePostQuery = createAsyncThunk(
  "post/delete",
  async (args, { rejectWithValue }) => {
    try {
      await axiosPrivateQuery.delete(`/posts/${args.postId}`);
      return args.postId;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const likePostQuery = createAsyncThunk(
  "post/reaction",
  async (args, { rejectWithValue }) => {
    try {
      await axiosPrivateQuery.patch(`/posts/${args.postId}/reaction`);
      return args;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const getPostsQuery = createAsyncThunk(
  "post/getAll",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.get(
        `/posts?page=${args.page}&limit=${POSTS_PER_PAGE}&${
          args.search ? `search=${args.search}` : ""
        }${args.tags ? `&tags=${args.tags}` : ""}`
      );
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const searchPosts = createAsyncThunk(
  "posts/search",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.get(
        `/posts/search?page=${args.page}&limit=${POSTS_PER_PAGE}&${
          args.search ? `search=${args.search}` : ""
        }${args.tags ? `&tags=${args.tags}` : ""}`
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const getUserMemoriesQuery = createAsyncThunk(
  "posts/user-memories",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.get(
        `/posts/${args.userId}/memories`
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const getUserLikedMemoriesQuery = createAsyncThunk(
  "posts/user-liked-memories",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.get(
        `/posts/${args.userId}/liked-memories`
      );

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);
