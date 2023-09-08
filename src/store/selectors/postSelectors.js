import { createSelector } from "@reduxjs/toolkit";

const selectedPostsLoadingStatus = ({ posts }) => ({
  loading: posts.postsLoadingStatus.loading,
  error: posts.postsLoadingStatus.error,
  message: posts.postsLoadingStatus.message,
});

const selectedCreatePostLoadingStatus = ({ posts }) => ({
  loading: posts.createPostLoadingStatus.loading,
  error: posts.createPostLoadingStatus.error,
  message: posts.createPostLoadingStatus.message,
});

export const selectPosts = ({ posts }) => posts.posts;

export const selectPostsLoadingStatus = createSelector(
  selectedPostsLoadingStatus,
  (status) => status
);

export const selectCreatePostLoadingStatus = createSelector(
  selectedCreatePostLoadingStatus,
  (status) => status
);
