import { useDispatch } from "react-redux";

import { postActions } from "store/reducers/postsSlice.js";
import { useModalContext } from "providers/ModalProvider";

import { Button } from "@mui/material";
import MemoryForm from "../MemoryForm/MemoryForm";
import { Upgrade } from "@mui/icons-material";
import styles from "./styles/postCard.module.css";

export default function UpdateButton({ post }) {
  const dispatch = useDispatch();

  const { onOpenModal, onClose } = useModalContext();

  const onCancelEdit = () => dispatch(postActions.clearPostToEdit());
  const setPostToUpdate = () => dispatch(postActions.setPostToEdit(post));

  const onEdit = (e) => {
    e.stopPropagation();
    dispatch(postActions.setPostToEdit(post));

    if (window.innerWidth <= 500)
      onOpenModal({
        content: <MemoryForm onDone={() => onClose()} />,
        onOpen: setPostToUpdate,
        onClose: onCancelEdit,
        modalStyles: { width: "500px" },
      });
    else setPostToUpdate();
  };

  return (
    <div className={styles["overlay_secondary"]}>
      <Button
        size="small"
        onClick={onEdit}
        title="update memory"
        variant="contained"
      >
        <Upgrade />
      </Button>
    </div>
  );
}
