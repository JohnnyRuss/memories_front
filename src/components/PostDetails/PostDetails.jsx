/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectPost,
  selectPostLoadingStatus,
} from "store/selectors/postSelectors";
import { getPostsQuery } from "store/thunks/posts.thunk";
import { postActions } from "store/reducers/postsSlice";

import { Spinner, Container } from "components/layouts";
import PostContent from "./components/content/PostContent";
import RelatedPosts from "./components/RelatedPosts";
import Comments from "./components/comments/Comments";
import * as MuiStyled from "./PostDetails.styled";

export default function PostDetails() {
  const dispatch = useDispatch();

  const singlePostStatus = useSelector(selectPostLoadingStatus);

  const post = useSelector(selectPost);

  useEffect(() => {
    if (!post) return;

    dispatch(
      getPostsQuery({
        tags: post.tags.join(","),
        page: 1,
      })
    );
  }, [post]);

  useEffect(() => {
    return () => {
      dispatch(postActions.resetPostDetails());
    };
  }, []);

  return (
    <Container>
      <MuiStyled.Paper elevation={6}>
        {singlePostStatus.loading ? (
          <Spinner />
        ) : post ? (
          <PostContent post={post} />
        ) : (
          <></>
        )}

        <Comments loading={singlePostStatus.loading} postId={post?._id || ""} />

        <RelatedPosts />
      </MuiStyled.Paper>
    </Container>
  );
}
