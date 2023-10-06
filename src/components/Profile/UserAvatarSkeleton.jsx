import { Skeleton, Box } from "@mui/material";
import styles from "./profile.module.css";

export default function UserAvatarSkeleton(props) {
  return (
    <figure className={styles.profileHeaderFig}>
      <Skeleton variant="circular" width={50} height={50} />

      <Box className={styles.profileHeaderFigCaption}>
        <Skeleton variant="text" width={80} />
        <Skeleton variant="text" width={110} />
      </Box>
    </figure>
  );
}
