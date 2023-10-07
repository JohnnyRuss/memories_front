import { nanoid } from "@reduxjs/toolkit";
import { Skeleton } from "@mui/material";
import styles from "../../postDetails.module.css";

export default function RelatedPostsSkeleton() {
  return Array.from(new Array(4)).map(() => (
    <div className={styles.relatedPostCard} key={nanoid()}>
      <Skeleton
        variant="rectangular"
        sx={{ aspectRatio: "1/1", width: "100%", height: "100%" }}
      />
    </div>
  ));
}
