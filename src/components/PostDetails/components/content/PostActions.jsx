import { usePostQuery } from "hooks/api";
import { useModalContext } from "providers/ModalProvider";

import {
  ThumbUpAlt,
  ThumbUpAltOutlined,
  Delete,
  Upgrade,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Modal, MemoryForm } from "components/layouts";

import styles from "../../postDetails.module.css";

export default function PostActions({
  postId,
  likesCount,
  likes,
  authorId,
  onEdit,
  onCancelEdit,
}) {
  const { onDelete, onReaction, currentUserId, isAuthenticated } =
    usePostQuery(postId);

  const { onOpenModal } = useModalContext();

  return (
    <>
      <div className={styles.postActionsBox}>
        <Button
          onClick={onReaction}
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
          <>
            <Button
              onClick={() =>
                onOpenModal({
                  content: <MemoryForm />,
                  onOpen: onEdit,
                  onClose: onCancelEdit,
                })
              }
            >
              <Upgrade />
            </Button>

            <Button color="error" onClick={onDelete}>
              <Delete />
            </Button>
          </>
        )}
      </div>
      <Modal />
    </>
  );
}
