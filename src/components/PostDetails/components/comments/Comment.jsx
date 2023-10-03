import CommentActions from "./CommentActions";
import { Typography, Avatar } from "@mui/material";

import styles from "./comments.module.css";

export default function Comment({ comment, isAuthenticated }) {
  return (
    <li className={styles.commentsListItem}>
      <Avatar alt="user" src="">
        {(comment.author.name || "").charAt(0).toUpperCase()}
      </Avatar>
      <div className={styles.commentsListItemContent}>
        <Typography textTransform="capitalize" fontWeight="bold">
          {comment.author.name}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {comment.text}
        </Typography>
        <div className={styles.commentsListItemContentFooter}>
          <span title="comment creation date">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(comment.createdAt))}
          </span>

          <CommentActions
            isAuthenticated={isAuthenticated}
            commentId={comment._id}
            authorId={comment.author._id}
            likes={comment.likes}
            likesCount={comment.likesCount}
          />
        </div>
      </div>
    </li>
  );
}
