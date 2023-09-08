import {
  initialStatus,
  controlStatus as status,
} from "./helpers/controlStatus";
import * as jwt from "utils/jwt";
import { RouterHistory } from "config/router";
import { createSlice } from "@reduxjs/toolkit";
import * as authAPI from "store/thunks/auth.thunk";

const initialState = {
  loadingStatus: initialStatus,

  isAuthenticated: false,

  user: {
    _id: "",
    name: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "memories/auth",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = initialState.user;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAPI.registerUserQuery.pending, (state, { payload }) => {
        state.loadingStatus = status("pending");
      })
      .addCase(
        authAPI.registerUserQuery.fulfilled,
        (state, { payload: { user, accessToken } }) => {
          jwt.setPassport(accessToken);

          state.isAuthenticated = true;

          state.user = {
            _id: user._id,
            email: user.email,
            name: user.name,
          };

          state.loadingStatus = status("success");

          RouterHistory.navigate("/");
        }
      )
      .addCase(authAPI.registerUserQuery.rejected, (state, { payload }) => {
        state.loadingStatus = status("fail", payload.message);
      });
    builder
      .addCase(authAPI.loginUserQuery.pending, (state, { payload }) => {
        state.loadingStatus = status("pending");
      })
      .addCase(
        authAPI.loginUserQuery.fulfilled,
        (state, { payload: { user, accessToken } }) => {
          jwt.setPassport(accessToken);

          state.isAuthenticated = true;

          state.user = {
            _id: user._id,
            email: user.email,
            name: user.name,
          };

          state.loadingStatus = status("success");

          RouterHistory.navigate("/");
        }
      )
      .addCase(authAPI.loginUserQuery.rejected, (state, { payload }) => {
        state.loadingStatus = status("fail", payload.message);
      });
    builder
      .addCase(authAPI.logoutUserQuery.pending, (state, { payload }) => {
        state.loadingStatus = status("pending");
      })
      .addCase(authAPI.logoutUserQuery.fulfilled, (state, { payload }) => {
        jwt.removePassport();

        state.isAuthenticated = false;

        state.user = initialState.user;

        state.loadingStatus = status("success");

        RouterHistory.navigate("/");
      })
      .addCase(authAPI.logoutUserQuery.rejected, (state, { payload }) => {
        state.loadingStatus = status("fail", payload.message);
      });
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
