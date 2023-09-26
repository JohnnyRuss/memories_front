import moment from "moment";

import { Typography, Divider } from "@mui/material";
import styles from "../postDetails.module.css";

export default function PostContent({ post }) {
  return (
    <div className={styles.section}>
      <Typography variant="h3" component="h2">
        {post.title}
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
      <Typography variant="h6">Created by: {post.author.name}</Typography>
      <Typography variant="body1">
        {moment(post.createdAt).fromNow()}
      </Typography>
      <Divider style={{ margin: "20px 0" }} />
      <Typography variant="body1">
        <strong>Realtime Chat - coming soon!</strong>
      </Typography>
      <Divider style={{ margin: "20px 0" }} />
      <Typography variant="body1">
        <strong>Comments - coming soon!</strong>
      </Typography>
      <Divider style={{ margin: "20px 0" }} />
    </div>
  );
}
