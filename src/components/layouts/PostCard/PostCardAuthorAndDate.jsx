import moment from "moment";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";
import styles from "./styles/postCard.module.css";

export default function PostCardAuthorAndDate({ author, createdAt }) {
  return (
    <div
      className={styles.authorAndDateContainer}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Link to={`/user/${author._id}`} className="underline">
        <Typography variant="h6" textTransform="capitalize">
          {author.name}
        </Typography>
      </Link>
      <Typography variant="body2">{moment(createdAt).fromNow()}</Typography>
    </div>
  );
}
