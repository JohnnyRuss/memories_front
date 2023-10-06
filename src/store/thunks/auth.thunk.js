import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublicQuery } from "services/axios";

export const registerUserQuery = createAsyncThunk(
  "user/register",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.post("/auth/register", args);
      return { user: data.user, accessToken: data.accessToken };
    } catch (error) {
      return rejectWithValue({
        message: error?.response.data || error?.message || error,
      });
    }
  }
);

export const loginUserQuery = createAsyncThunk(
  "user/login",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.post("/auth/login", args);
      return { user: data.user, accessToken: data.accessToken };
    } catch (error) {
      console.log(error);
      return rejectWithValue({
        message: error?.response?.data || error?.message || error,
      });
    }
  }
);

export const logoutUserQuery = createAsyncThunk(
  "user/logout",
  async (args, { rejectWithValue }) => {
    try {
      await axiosPublicQuery.post("/auth/logout");
    } catch (error) {
      return rejectWithValue({
        message: error?.response.data || error?.message || error,
      });
    }
  }
);

export const getUserProfileInfoQuery = createAsyncThunk(
  "user/profile-info",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublicQuery.get(`/users/${args.userId}`);

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error?.response.data || error?.message || error,
      });
    }
  }
);
