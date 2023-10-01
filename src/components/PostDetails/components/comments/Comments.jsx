import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useIsAuthenticatedUser } from "hooks/auth";
import { addCommentQuery } from "store/thunks/comment.thunk";

import { selectComments } from "store/selectors/commentSelectors";

import { Typography, TextField, Button, Avatar } from "@mui/material";
// import * as MuiStyled from "./Comments.styled";
import styles from "./comments.module.css";

export default function Comments({ loading, postId }) {
  const dispatch = useDispatch();

  const comments = useSelector(selectComments);
  const [comment, setComment] = useState("");

  const { isAuthenticated } = useIsAuthenticatedUser({ checkOnMount: true });

  async function onAddComment() {
    if (!isAuthenticated || !postId) return;

    await dispatch(addCommentQuery({ text: comment, postId })).unwrap();

    setComment("");
  }

  return (
    <div className={styles.commentsContainer}>
      {!loading && (
        <div className={styles.commentsListContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>

          <div className={styles.commentsInnerContainer}>
            {comments[0] ? (
              comments.map((comment) => (
                <li key={comment._id}>
                  <Avatar alt="user" src="">
                    {(comment.author.name || "").charAt(0).toUpperCase()}
                  </Avatar>
                  <Typography gutterBottom variant="subtitle1">
                    {comment.text}
                  </Typography>
                </li>
              ))
            ) : (
              <p>There are no comments yet</p>
            )}
          </div>
        </div>
      )}

      <div className={styles.writeCommentBox}>
        <Typography gutterBottom variant="h6">
          Write a Comments
        </Typography>

        <TextField
          fullWidth
          rows={5}
          variant="outlined"
          label="comment"
          multiline
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <Button
          style={{ marginTop: "10px" }}
          fullWidth
          disabled={!comment}
          variant="contained"
          color="primary"
          onClick={onAddComment}
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
}
