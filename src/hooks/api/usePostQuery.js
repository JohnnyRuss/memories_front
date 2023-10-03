import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import * as postAPI from "store/thunks/posts.thunk";
import { postActions } from "store/reducers/postsSlice";
import useIsCurrentUser from "hooks/auth/useIsCurrentUser";
import { useIsAuthenticatedUser } from "hooks/auth";
import { useDialogContext } from "providers/DialogProvider";

export default function usePostQuery(postId) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUserId } = useIsCurrentUser();
  const { isAuthenticated } = useIsAuthenticatedUser({ checkOnMount: true });

  const { onOpenDialog } = useDialogContext();

  const onDelete = () => {
    if (!isAuthenticated || !postId) return;

    dispatch(postActions.setDeletingPost(postId));
    onOpenDialog({
      title: "Delete Post",
      message: "Are you sure you want to delete this post ?",
      onConfirm: () => dispatch(postAPI.deletePostQuery({ postId })),
    });
  };

  const onReaction = (e) => {
    e.stopPropagation();

    if (!isAuthenticated || !postId) return;
    dispatch(postAPI.likePostQuery({ postId, currentUserId }));
  };

  const { search: searchParams } = useLocation();
  const query = new URLSearchParams(searchParams);

  const tagsQuery = query.get("tags");
  const searchQuery = query.get("search");
  const pageQuery = query.get("page") || 1;

  const getAllPosts = () => {
    const credentials = {
      page: +pageQuery || 1,
    };

    if (searchQuery) credentials.search = searchQuery;
    if (tagsQuery) credentials.tags = tagsQuery;

    dispatch(postAPI.getPostsQuery(credentials));
  };

  function onSearch({ search, tags }) {
    if (!search.trim() && !tags[0]) return navigate("/");

    query.delete("page");
    query.append("page", 1);

    if (search) {
      if (searchQuery) query.delete("search");
      query.append("search", search);
    }

    if (tags[0]) {
      if (tagsQuery) query.delete("tags");
      query.append("tags", tags.join(","));
    }

    navigate(`/posts/search?${query.toString()}`);
  }

  return {
    onDelete,
    onReaction,
    searchQuery,
    tagsQuery,
    pageQuery,
    getAllPosts,
    onSearch,
    isAuthenticated,
    currentUserId,
  };
}
