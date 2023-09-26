/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostQuery } from "store/thunks/posts.thunk";

import PostDetails from "components/PostDetails/PostDetails";

export default function PostDetailsPage() {
  const dispatch = useDispatch();

  const { postId } = useParams();

  useEffect(() => {
    if (!postId) return;

    dispatch(getPostQuery({ postId }));
  }, [postId]);

  return <PostDetails />;
}
