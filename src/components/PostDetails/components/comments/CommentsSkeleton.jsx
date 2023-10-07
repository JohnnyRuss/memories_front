import { nanoid } from "@reduxjs/toolkit";
import { Skeleton } from "@mui/material";
import styles from "./comments.module.css";

export default function CommentsSkeleton() {
  return Array.from(new Array(2)).map(() => (
    <li className={styles.commentsListItem} key={nanoid()}>
      <Skeleton
        variant="circular"
        width={50}
        height={50}
        sx={{ minWidth: "50px" }}
      />
      <div className={styles.commentsListItemContent}>
        <Skeleton variant="text" width={120} />
        <Skeleton variant="text" />
        <div className={styles.commentsListItemContentFooter}>
          <Skeleton variant="text" width={80} />
        </div>
      </div>
    </li>
  ));
}
