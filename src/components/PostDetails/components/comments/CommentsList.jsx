import { forwardRef } from "react";
import { useSelector } from "react-redux";

import { selectComments } from "store/selectors/commentSelectors";

import Comment from "./Comment";
import { Typography } from "@mui/material";
import styles from "./comments.module.css";

const CommentsList = forwardRef(({ isAuthenticated }, ref) => {
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

      <div className={styles.commentsListInnerContainer}>
        {comments[0] ? (
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
            textAlign="center"
            color="rgba(0,0,0,0.5)"
            style={{ width: "100%" }}
          >
            There are no comments yet.
          </Typography>
        )}
      </div>
    </div>
  );
});

export default CommentsList;
