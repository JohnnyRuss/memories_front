import moment from "moment";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";
import styles from "../../postDetails.module.css";
import * as MuiStyled from "../../PostDetails.styled";

export default function PostContentHead({ title, author, createdAt, tags }) {
  return (
    <>
      <MuiStyled.Title variant="h3" component="h2" fontSize="36px">
        {title}
      </MuiStyled.Title>

      <Typography
        variant="h6"
        fontSize="16px"
        style={{ display: "flex", alignItems: "center" }}
      >
        By:&nbsp;
        <Link
          to={`/user/${author._id}`}
          className={`underline ${styles.postAuthorName}`}
        >
          {author.name}
        </Link>
        &nbsp;&mdash;&nbsp;
        <span className={styles.postCreationDate}>
          {moment(createdAt).fromNow()}
        </span>
      </Typography>

      <Typography
        gutterBottom
        variant="h6"
        color="textSecondary"
        component="h2"
        fontSize="16px"
      >
        {tags.map((tag) => `#${tag} `)}
      </Typography>
    </>
  );
}
