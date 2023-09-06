import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublicQuery } from "services/axios";

export const createPostQuery = createAsyncThunk(
  "post/create",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.post("/posts", args);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostsQuery = createAsyncThunk(
  "post/getAll",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.get("/posts");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
