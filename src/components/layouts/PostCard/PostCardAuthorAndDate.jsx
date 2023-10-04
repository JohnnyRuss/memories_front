import moment from "moment";

import { Typography } from "@mui/material";
import styles from "./styles/postCard.module.css";

export default function PostCardAuthorAndDate({ author, createdAt }) {
  return (
    <div className={styles.overlay}>
      <Typography variant="h6" textTransform="capitalize">
        {author.name}
      </Typography>
      <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
    </div>
  );
}
