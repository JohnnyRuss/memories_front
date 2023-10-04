import { useModalContext } from "providers/ModalProvider";

import { Grid, Button } from "@mui/material";
import { MemoryForm } from "components/layouts";

export default function CreatePostButton() {
  const { onOpenModal, onClose } = useModalContext();

  function onCreateMemory() {
    onOpenModal({
      content: <MemoryForm onDone={() => onClose()} />,
      modalStyles: { width: "500px" },
    });
  }

  return (
    <Grid
      item
      xs={12}
      display={{ md: "none", xs: "block" }}
      alignSelf="start"
      sx={{ marginTop: "-15px" }}
    >
      <Button variant="contained" fullWidth onClick={onCreateMemory}>
        Create Memory
      </Button>
    </Grid>
  );
}
