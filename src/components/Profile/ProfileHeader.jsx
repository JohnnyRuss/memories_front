import UserAvatar from "./UserAvatar";
import { Box, Divider, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import styles from "./profile.module.css";

export default function ProfileHeader(props) {
  return (
    <Box>
      <div className={styles.profileHeader}>
        <UserAvatar />

        <Button variant="contained">
          <Add />
          <span>Crate Memory</span>
        </Button>
      </div>
      <Divider sx={{ margin: "15px 0 10px 0" }} />
    </Box>
  );
}
