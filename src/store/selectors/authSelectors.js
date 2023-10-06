import { createSelector } from "@reduxjs/toolkit";

const selectedAuthStatus = ({ auth }) => ({
  loading: auth.loadingStatus.loading,
  error: auth.loadingStatus.error,
  message: auth.loadingStatus.message,
});

const selectedCurrentUser = ({ auth }) => ({
  _id: auth.user._id,
  email: auth.user.email,
  name: auth.user.name,
});

const selectedProfileInfo = ({ auth }) => ({
  _id: auth.profileInfo._id,
  email: auth.profileInfo.email,
  name: auth.profileInfo.name,
});

export const selectUserStatus = createSelector(
  selectedAuthStatus,
  (status) => status
);

export const selectCurrentUser = createSelector(
  selectedCurrentUser,
  (user) => user
);

export const selectProfileInfo = createSelector(
  selectedProfileInfo,
  (profileInfo) => profileInfo
);

export const selectIsAuthenticated = ({ auth }) => auth.isAuthenticated;

export const selectCurrentUserId = ({ auth }) => auth.user._id;
