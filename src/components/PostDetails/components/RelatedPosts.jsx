import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectPosts,
  selectPostsLoadingStatus,
} from "store/selectors/postSelectors";

import { Spinner } from "components/layouts";
import styles from "../postDetails.module.css";

import { Typography, Divider } from "@mui/material";

export default function RelatedPosts(props) {
  const navigate = useNavigate();

  const onOpenPost = (postId) => navigate(`/posts/${postId}`);

  const relatedPostsStatus = useSelector(selectPostsLoadingStatus);
  const relatedPosts = useSelector(selectPosts);

  return (
    <section>
      {relatedPostsStatus.loading ? (
        <Spinner />
      ) : (
        <>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          {relatedPosts[0] ? (
            <div className={styles.relatedPosts}>
              {relatedPosts.map((relatedPost) => (
                <div
                  className={styles.relatedPostCard}
                  onClick={() => onOpenPost(relatedPost._id)}
                  key={relatedPost._id}
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className={styles.relatedPostCardImage}
                  />

                  <div className={styles.relatedPostDetailsBox}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      title={relatedPost.title}
                      style={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {relatedPost.title}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      {relatedPost.author.name}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Typography
              variant="h6"
              align="center"
              marginTop="30px"
              color="rgba(0,0,0,0.5)"
            >
              There are no related posts yet.
            </Typography>
          )}
        </>
      )}
    </section>
  );
}
