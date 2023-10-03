import { useDispatch } from "react-redux";

import {
  reactOnCommentQuery,
  deleteCommentQuery,
} from "store/thunks/comment.thunk";
import useIsCurrentUser from "hooks/auth/useIsCurrentUser";
import { useDialogContext } from "providers/DialogProvider";

import { Button } from "@mui/material";
import { ThumbUpAlt, ThumbUpAltOutlined, Delete } from "@mui/icons-material";
import styles from "./comments.module.css";

export default function CommentActions({
  isAuthenticated,
  commentId,
  authorId,
  likes,
  likesCount,
}) {
  const dispatch = useDispatch();

  const { currentUserId } = useIsCurrentUser();

  const { onOpenDialog } = useDialogContext();

  function onReactOnComment() {
    if (!isAuthenticated || !commentId) return;
    dispatch(reactOnCommentQuery({ commentId }));
  }

  function onDeleteComment() {
    if (!isAuthenticated || !commentId) return;
    dispatch(deleteCommentQuery({ commentId }));
  }

  return (
    <div className={styles.commentsListItemContentFooterActions}>
      <Button
        title="like"
        color="primary"
        onClick={() => onReactOnComment()}
        style={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        {likes.includes(currentUserId) ? (
          <ThumbUpAlt />
        ) : (
          <ThumbUpAltOutlined />
        )}

        <span>{likesCount}</span>
      </Button>

      {isAuthenticated && authorId === currentUserId && (
        <Button
          color="error"
          title="delete"
          onClick={() =>
            onOpenDialog({
              title: "Delete Comment",
              message: "Are you sure you want to delete this comment ?",
              onConfirm: () => onDeleteComment(),
            })
          }
        >
          <Delete />
        </Button>
      )}
    </div>
  );
}
