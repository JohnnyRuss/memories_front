import { createSelector } from "@reduxjs/toolkit";

const selectedPostsLoadingStatus = ({ posts }) => ({
  loading: posts.postsLoadingStatus.loading,
  error: posts.postsLoadingStatus.error,
  message: posts.postsLoadingStatus.message,
});

const selectedPostLoadingStatus = ({ posts }) => ({
  loading: posts.postLoadingStatus.loading,
  error: posts.postLoadingStatus.error,
  message: posts.postLoadingStatus.message,
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

const selectedPagination = ({ posts }) => ({
  postsTotal: posts.postsTotal,
  currentPage: posts.currentPage,
  numberOfPages: posts.numberOfPages,
});

const selectedEditingPost = ({ posts }) => ({
  _id: posts.editingPost._id,
  title: posts.editingPost.title,
  text: posts.editingPost.text,
  tags: posts.editingPost.tags,
  image: posts.editingPost.image,
});

export const selectPosts = ({ posts }) =>
  posts.post
    ? posts.posts.filter((p) => p._id !== posts.post._id)
    : posts.posts;

export const selectPost = ({ posts }) => posts.post;

export const selectPostsLoadingStatus = createSelector(
  selectedPostsLoadingStatus,
  (status) => status
);

export const selectPostLoadingStatus = createSelector(
  selectedPostLoadingStatus,
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

export const selectPagination = createSelector(
  selectedPagination,
  (pagination) => pagination
);
