import { useDialogContext } from "providers/DialogProvider";

import { Typography, Avatar, Button } from "@mui/material";
import { ThumbUpAlt, ThumbUpAltOutlined, Delete } from "@mui/icons-material";
import styles from "./comments.module.css";

export default function Comment({ comment, isAuthenticated }) {
  const { onOpenDialog } = useDialogContext();

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

          {isAuthenticated && (
            <div className={styles.commentsListItemContentFooterActions}>
              <Button title="like" color="primary">
                <ThumbUpAltOutlined />
              </Button>
              <Button
                color="error"
                title="delete"
                onClick={() =>
                  onOpenDialog({
                    title: "Delete Comment",
                    message: "Are you sure you want to delete this comment ?",
                  })
                }
              >
                <Delete />
              </Button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
