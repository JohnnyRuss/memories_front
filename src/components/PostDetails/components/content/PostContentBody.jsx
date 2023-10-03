import { nanoid } from "@reduxjs/toolkit";

import PostImage from "./PostImage";
import { Typography } from "@mui/material";
import styles from "../../postDetails.module.css";

export default function PostContentBody({ text, image, title }) {
  return (
    <>
      <div className={styles.postContentBody}>
        <div className={styles.postText}>
          <PostImage image={image} title={title} />
          <Typography gutterBottom variant="body1" component="div">
            {text.split("\n").map((fragment) => (
              <p key={nanoid()} className={styles.postTextParagraph}>
                {fragment}
              </p>
            ))}
          </Typography>
          <div className={styles.clearFix} />
        </div>
      </div>
    </>
  );
}
