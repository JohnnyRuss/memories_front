import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useCreateMemory } from "hooks/utils";
import { selectCurrentUser } from "store/selectors/authSelectors";

import UserAvatar from "./UserAvatar";
import { Box, Divider, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import styles from "./profile.module.css";

export default function ProfileHeader() {
  const { userId } = useParams();

  const currentUser = useSelector(selectCurrentUser);

  const { onOpenCreateMemoryModal } = useCreateMemory();

  return (
    <Box>
      <div className={styles.profileHeader}>
        <UserAvatar />

        {userId === currentUser._id && (
          <Button variant="contained" onClick={onOpenCreateMemoryModal}>
            <Add />
            <span>Crate Memory</span>
          </Button>
        )}
      </div>
      <Divider sx={{ margin: "15px 0 10px 0" }} />
    </Box>
  );
}
