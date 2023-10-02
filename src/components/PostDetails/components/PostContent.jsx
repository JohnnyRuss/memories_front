import moment from "moment";

import { Typography } from "@mui/material";
import styles from "../postDetails.module.css";
import * as MuiStyled from "../PostDetails.styled";

export default function PostContent({ post }) {
  return (
    <div className={styles.postDetailsSection}>
      <MuiStyled.Title variant="h3" component="h2" fontSize="36px">
        {post.title}
      </MuiStyled.Title>

      <Typography
        variant="h6"
        fontSize="16px"
        style={{ display: "flex", alignItems: "center" }}
      >
        By:&nbsp;
        <span className={styles.postAuthorName}>{post.author.name}</span>
        &nbsp;&mdash;&nbsp;
        <span className={styles.postCreationDate}>
          {moment(post.createdAt).fromNow()}
        </span>
      </Typography>

      <Typography
        gutterBottom
        variant="h6"
        color="textSecondary"
        component="h2"
        fontSize="16px"
      >
        {post.tags.map((tag) => `#${tag} `)}
      </Typography>

      <Typography gutterBottom variant="body1" component="p">
        {post.text}
      </Typography>
    </div>
  );
}
