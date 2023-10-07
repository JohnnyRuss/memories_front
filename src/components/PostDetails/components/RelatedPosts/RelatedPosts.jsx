import { useSelector } from "react-redux";

import {
  selectPosts,
  selectPostsLoadingStatus,
} from "store/selectors/postSelectors";

import RelatedPostCard from "./RelatedPostCard";
import RelatedPostsSkeleton from "./RelatedPostsSkeleton";
import { Typography, Divider } from "@mui/material";
import styles from "../../postDetails.module.css";

export default function RelatedPosts() {
  const relatedPostsStatus = useSelector(selectPostsLoadingStatus);
  const relatedPosts = useSelector(selectPosts);

  return (
    <section className={styles.relatedPostsContainer}>
      <Divider style={{ margin: "20px 0" }} />

      <Typography gutterBottom variant="h5">
        You might also like:
      </Typography>

      <Divider />

      {relatedPostsStatus.loading ? (
        <div className={styles.relatedPosts}>
          <RelatedPostsSkeleton />
        </div>
      ) : relatedPosts?.[0] ? (
        <div className={styles.relatedPosts}>
          {relatedPosts.map((relatedPost) => (
            <RelatedPostCard key={relatedPost._id} relatedPost={relatedPost} />
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
    </section>
  );
}
