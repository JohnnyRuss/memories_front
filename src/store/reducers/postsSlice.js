import {
  initialStatus,
  controlStatus as status,
} from "./helpers/controlStatus";
import { createSlice } from "@reduxjs/toolkit";
import * as postsAPI from "store/thunks/posts.thunk";
import { RouterHistory } from "config/router";

const initialState = {
  posts: [],

  postsTotal: "",
  currentPage: "",
  numberOfPages: "",

  post: null,

  editingPost: {
    _id: "",
    title: "",
    text: "",
    tags: "",
    image: "",
  },

  deletingPostId: "",

  postLoadingStatus: initialStatus,
  postsLoadingStatus: initialStatus,
  createPostLoadingStatus: initialStatus,
  deletePostLoadingStatus: initialStatus,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostToEdit(state, { payload }) {
      state.editingPost = {
        _id: payload._id,
        title: payload.title,
        text: payload.text,
        tags: payload.tags.map((tag) => `#${tag}`).join(","),
        image: payload.image,
      };
    },

    clearPostToEdit(state) {
      state.editingPost = initialState.editingPost;
    },

    setDeletingPost(state, { payload }) {
      state.deletingPostId = payload;
    },

    resetPostDetails(state) {
      state.post = null;
      state.posts = [];
    },

    resetAllPostsPage(state) {
      state.posts = [];
      state.postsTotal = "";
      state.currentPage = "";
      state.numberOfPages = "";
    },
  },
  extraReducers: (builder) => {
    // CREATE POST
    builder
      .addCase(postsAPI.createPostQuery.pending, (state) => {
        state.createPostLoadingStatus = status("pending");
      })
      .addCase(postsAPI.createPostQuery.fulfilled, (state, { payload }) => {
        state.posts = [payload, ...state.posts];
        state.createPostLoadingStatus = status("success");
      })
      .addCase(postsAPI.createPostQuery.rejected, (state, { payload }) => {
        console.log(payload);
        state.createPostLoadingStatus = status("fail", payload.message);
      });
    // GET SINGLE POST
    builder
      .addCase(postsAPI.getPostQuery.pending, (state) => {
        state.postLoadingStatus = status("pending");
      })
      .addCase(postsAPI.getPostQuery.fulfilled, (state, { payload }) => {
        state.post = payload;
        state.postLoadingStatus = status("success");
      })
      .addCase(postsAPI.getPostQuery.rejected, (state, { payload }) => {
        console.log(payload);
        state.postLoadingStatus = status("fail", payload.message);
      });
    // UPDATE POST
    builder
      .addCase(postsAPI.updatePostQuery.pending, (state) => {
        state.createPostLoadingStatus = status("pending");
      })
      .addCase(postsAPI.updatePostQuery.fulfilled, (state, { payload }) => {
        const updatedPostIndex = state.posts.findIndex(
          (post) => post._id === payload._id
        );

        const isActivePostOperation =
          state.post && state.post._id === payload._id;

        if (updatedPostIndex < 0 && !isActivePostOperation) return;

        if (isActivePostOperation) state.post = payload;
        else state.posts[updatedPostIndex] = payload;

        state.createPostLoadingStatus = status("success");
      })
      .addCase(postsAPI.updatePostQuery.rejected, (state, { payload }) => {
        console.log(payload);
        state.createPostLoadingStatus = status("fail", payload.message);
      });
    // DELETE POST
    builder
      .addCase(postsAPI.deletePostQuery.pending, (state) => {
        state.deletePostLoadingStatus = status("pending");
      })
      .addCase(postsAPI.deletePostQuery.fulfilled, (state, { payload }) => {
        const isActivePostOperation = state.post && state.post._id === payload;

        if (isActivePostOperation) {
          state.post = null;
          RouterHistory.navigate("/");
        } else {
          state.posts = state.posts.filter((post) => post._id !== payload);
        }

        state.deletePostLoadingStatus = status("success");
      })
      .addCase(postsAPI.deletePostQuery.rejected, (state, { payload }) => {
        console.log(payload);
        state.deletePostLoadingStatus = status("fail", payload.message);
      });
    // LIKE POST
    builder
      .addCase(postsAPI.likePostQuery.pending, () => {})
      .addCase(postsAPI.likePostQuery.fulfilled, (state, { payload }) => {
        const postIndex = state.posts.findIndex(
          (post) => post._id === payload.postId
        );

        const isActivePostOperation =
          state.post && state.post._id === payload.postId;

        if (postIndex < 0 && !isActivePostOperation) return;

        const post = isActivePostOperation
          ? state.post
          : state.posts[postIndex];

        const reactionAlreadyExists = post.likes.some(
          (reaction) => reaction === payload.currentUserId
        );

        if (isActivePostOperation) {
          if (reactionAlreadyExists) {
            state.post.likes = post.likes.filter(
              (reaction) => reaction !== payload.currentUserId
            );
            state.post.likeCount -= 1;
          } else {
            state.post.likes.push(payload.currentUserId);
            state.post.likeCount += 1;
          }
        } else {
          if (reactionAlreadyExists) {
            state.posts[postIndex].likeCount -= 1;
            state.posts[postIndex].likes = post.likes.filter(
              (reaction) => reaction !== payload.currentUserId
            );
          } else {
            state.posts[postIndex].likeCount += 1;
            state.posts[postIndex].likes.push(payload.currentUserId);
          }
        }
      })
      .addCase(postsAPI.likePostQuery.rejected, (state, { payload }) => {
        console.log(payload);
        // state.deletePostLoadingStatus = status("fail", payload.message);
      });
    // GET ALL POSTS
    builder
      .addCase(postsAPI.getPostsQuery.pending, (state) => {
        state.postsLoadingStatus = status("pending");
      })
      .addCase(postsAPI.getPostsQuery.fulfilled, (state, { payload }) => {
        const { data, total, currentPage, numberOfPages } = payload;

        state.posts = data;
        state.postsTotal = total;
        state.currentPage = currentPage;
        state.numberOfPages = numberOfPages;

        state.postsLoadingStatus = status("success");
      })
      .addCase(postsAPI.getPostsQuery.rejected, (state, { payload }) => {
        console.log(payload);
        state.postsLoadingStatus = status("fail", payload.message);
      });
    // SEARCH POSTS
    builder
      .addCase(postsAPI.searchPosts.pending, (state) => {
        state.postsLoadingStatus = status("pending");
      })
      .addCase(postsAPI.searchPosts.fulfilled, (state, { payload }) => {
        const { data, total, currentPage, numberOfPages } = payload;

        state.posts = data;
        state.postsTotal = total;
        state.currentPage = currentPage;
        state.numberOfPages = numberOfPages;

        state.postsLoadingStatus = status("success");
      })
      .addCase(postsAPI.searchPosts.rejected, (state, { payload }) => {
        console.log(payload);
        state.postsLoadingStatus = status("fail", payload.message);
      });
    // GET USER MEMORIES
    builder
      .addCase(postsAPI.getUserMemoriesQuery.pending, (state) => {
        state.postsLoadingStatus = status("pending");
      })
      .addCase(
        postsAPI.getUserMemoriesQuery.fulfilled,
        (state, { payload }) => {
          state.posts = payload;
          state.postsLoadingStatus = status("success");
        }
      )
      .addCase(postsAPI.getUserMemoriesQuery.rejected, (state, { payload }) => {
        console.log(payload);
        state.postsLoadingStatus = status("fail", payload.message);
      });
    // GET USER LIKED MEMORIES
    builder
      .addCase(postsAPI.getUserLikedMemoriesQuery.pending, (state) => {
        state.postsLoadingStatus = status("pending");
      })
      .addCase(
        postsAPI.getUserLikedMemoriesQuery.fulfilled,
        (state, { payload }) => {
          state.posts = payload;
          state.postsLoadingStatus = status("success");
        }
      )
      .addCase(
        postsAPI.getUserLikedMemoriesQuery.rejected,
        (state, { payload }) => {
          console.log(payload);
          state.postsLoadingStatus = status("fail", payload.message);
        }
      );
  },
});

export default postsSlice.reducer;
export const postActions = postsSlice.actions;
