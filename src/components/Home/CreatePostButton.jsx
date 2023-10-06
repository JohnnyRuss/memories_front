import { useCreateMemory } from "hooks/utils";
import { Grid, Button } from "@mui/material";

export default function CreatePostButton() {
  const { onOpenCreateMemoryModal } = useCreateMemory();

  return (
    <Grid
      item
      xs={12}
      display={{ md: "none", xs: "block" }}
      alignSelf="start"
      sx={{ marginTop: "-15px" }}
    >
      <Button variant="contained" fullWidth onClick={onOpenCreateMemoryModal}>
        Create Memory
      </Button>
    </Grid>
  );
}
