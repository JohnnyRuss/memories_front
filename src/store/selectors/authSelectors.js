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

export const selectAuthStatus = createSelector(
  selectedAuthStatus,
  (status) => status
);

export const selectCurrentUser = createSelector(
  selectedCurrentUser,
  (user) => user
);

export const selectIsAuthenticated = ({ auth }) => auth.isAuthenticated;
