import moment from "moment";

import { Typography, Divider } from "@mui/material";
import styles from "../postDetails.module.css";
import * as MuiStyled from "../PostDetails.styled";

export default function PostContent({ post }) {
  return (
    <div className={styles.postDetailsSection}>
      <MuiStyled.Title variant="h3" component="h2">
        {post.title}
      </MuiStyled.Title>

      <Typography variant="h6">
        By: {post.author.name}&nbsp;&mdash;&nbsp;
        <span>{moment(post.createdAt).fromNow()}</span>
      </Typography>

      <Typography
        gutterBottom
        variant="h6"
        color="textSecondary"
        component="h2"
      >
        {post.tags.map((tag) => `#${tag} `)}
      </Typography>

      <Typography gutterBottom variant="body1" component="p">
        {post.text}
      </Typography>
    </div>
  );
}
