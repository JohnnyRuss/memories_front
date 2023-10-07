import { forwardRef } from "react";
import { useSelector } from "react-redux";

import { selectComments } from "store/selectors/commentSelectors";

import Comment from "./Comment";
import CommentsSkeleton from "./CommentsSkeleton";
import { Typography } from "@mui/material";
import styles from "./comments.module.css";

const CommentsList = forwardRef(({ isAuthenticated, loading }, ref) => {
  const comments = useSelector(selectComments);

  return (
    <div
      className={`${styles.commentsListContainer}  ${
        isAuthenticated ? styles.halfWidth : styles.fullWidth
      }`}
    >
      <Typography gutterBottom variant="h6">
        Comments
      </Typography>

      <div
        className={`${styles.commentsListInnerContainer} ${
          comments[0] ? "" : styles.empty
        }`}
      >
        {loading ? (
          <CommentsSkeleton />
        ) : comments?.[0] ? (
          <>
            {comments.map((comment) => (
              <Comment
                key={comment._id}
                comment={comment}
                isAuthenticated={isAuthenticated}
              />
            ))}

            <div ref={ref} />
          </>
        ) : (
          <Typography
            variant="h6"
            align="center"
            marginTop="30px"
            color="rgba(0,0,0,0.5)"
            className="no-result__msg"
          >
            There are no comments yet.
          </Typography>
        )}
      </div>
    </div>
  );
});

export default CommentsList;
