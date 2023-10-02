import { useState } from "react";
import { useDispatch } from "react-redux";

import { addCommentQuery } from "store/thunks/comment.thunk";

import { Typography, TextField, Button } from "@mui/material";
import styles from "./comments.module.css";

export default function WriteComment({ postId, commentRef }) {
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
  );
}
