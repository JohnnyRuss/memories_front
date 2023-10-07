import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCommentQuery } from "store/thunks/comment.thunk";

import { Typography, TextField, Button, Skeleton } from "@mui/material";
import styles from "./comments.module.css";

export default function WriteComment({ postId, commentRef, loading }) {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  async function onAddComment() {
    if (!postId) return;

    await dispatch(addCommentQuery({ text: comment, postId })).unwrap();

    setComment("");

    if (commentRef.current)
      commentRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.writeCommentBox}>
      <Typography gutterBottom variant="h6">
        Write a Comments
      </Typography>

      {loading ? (
        <>
          <Skeleton variant="rectangular" height={140} />
          <Skeleton
            variant="rectangular"
            height={50}
            sx={{ marginTop: "10px" }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
