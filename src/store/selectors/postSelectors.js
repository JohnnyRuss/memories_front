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

const selectedDeletePostLoadingStatus = ({ posts }) => ({
  deletingPostId: posts.deletingPostId,
  status: {
    loading: posts.deletePostLoadingStatus.loading,
    error: posts.deletePostLoadingStatus.error,
    message: posts.deletePostLoadingStatus.message,
  },
});

const selectedEditingPost = ({ posts }) => ({
  _id: posts.editingPost._id,
  title: posts.editingPost.title,
  text: posts.editingPost.text,
  tags: posts.editingPost.tags,
  image: posts.editingPost.image,
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

export const selectDeletePostLoadingStatus = createSelector(
  selectedDeletePostLoadingStatus,
  (status) => status
);

export const selectEditingPost = createSelector(
  selectedEditingPost,
  (post) => post
);
