import { nanoid } from "@reduxjs/toolkit";

import { Skeleton, Typography } from "@mui/material";
import styles from "../../postDetails.module.css";

export default function PostContentSkeleton() {
  return (
    <div className={styles.postDetailsSection}>
      <Typography variant="h3" component="h2" width="70%">
        <Skeleton variant="text" />
      </Typography>

      <Typography variant="h6" fontSize="16px" width="30%">
        <Skeleton variant="text" />
      </Typography>

      <Typography width="50%">
        <Skeleton variant="text" />
      </Typography>

      <div className={styles.contentSkeletonContainer}>
        <div className={styles.contentSkeletonMediaBlockContainer}>
          <div>
            {Array.from(new Array(13)).map(() => (
              <Skeleton variant="text" key={nanoid()} />
            ))}
          </div>

          <figure>
            <Skeleton variant="rectangular" />
          </figure>
        </div>
        {Array.from(new Array(7)).map(() => (
          <Skeleton variant="text" key={nanoid()} />
        ))}
      </div>
    </div>
  );
}
