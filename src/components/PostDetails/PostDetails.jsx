/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux";

import {
  selectPost,
  selectPosts,
  selectPostLoadingStatus,
  selectPostsLoadingStatus,
} from "store/selectors/postSelectors";
import { getPostsQuery } from "store/thunks/posts.thunk";

import styles from "./postDetails.module.css";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";
import { Spinner, Container } from "components/layouts";
import { Paper, Typography, Divider } from "@mui/material";
import { useEffect } from "react";

export default function PostDetails() {
  const dispatch = useDispatch();

  const singlePostStatus = useSelector(selectPostLoadingStatus);
  const relatedPostsStatus = useSelector(selectPostsLoadingStatus);

  const post = useSelector(selectPost);
  const relatedPosts = useSelector(selectPosts);

  useEffect(() => {
    if (!post) return;

    dispatch(
      getPostsQuery({
        tags: post.tags,
        page: 1,
      })
    );
  }, [post]);

  return (
    <Container>
      <Paper
        style={{ padding: "20px", borderRadius: "15px", minHeight: "90vh" }}
        elevation={6}
      >
        {singlePostStatus.loading && <Spinner />}

        {post && (
          <div className={styles.card}>
            <PostContent post={post} />
            <PostImage image={post.image} title={post.title} />
          </div>
        )}

        <div className={styles.section}>
          {relatedPostsStatus.loading && <Spinner />}

          {relatedPosts[0] && (
            <>
              <Typography gutterBottom variant="h5">
                You might also like:
              </Typography>
              <Divider />
              <div className={styles.recommendedPosts}>
                {relatedPosts.map((relatedPost) => (
                  <div
                    style={{ margin: "20px", cursor: "pointer" }}
                    // onClick={() => openPost(_id)}
                    key={relatedPost._id}
                  >
                    <Typography gutterBottom variant="h6">
                      {relatedPost.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      {relatedPost.author.name}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      {relatedPost.text}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                      Likes: {relatedPost.likes.length}
                    </Typography>
                    <img
                      src={relatedPost.image}
                      width="200px"
                      alt={relatedPost.title}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </Paper>
    </Container>
  );
}
