import { useNavigate, Link } from "react-router-dom";

import { Typography } from "@mui/material";
import styles from "../../postDetails.module.css";

export default function RelatedPostCard({ relatedPost }) {
  const navigate = useNavigate();
  const onOpenPost = (postId) => navigate(`/posts/${postId}`);

  return (
    <div
      className={styles.relatedPostCard}
      onClick={() => onOpenPost(relatedPost._id)}
      key={relatedPost._id}
    >
      <img
        src={relatedPost.image}
        alt={relatedPost.title}
        loading="lazy"
        className={styles.relatedPostCardImage}
      />

      <div className={styles.relatedPostDetailsBox}>
        <Typography
          gutterBottom
          variant="h6"
          title={relatedPost.title}
          style={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {relatedPost.title}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle2"
          textTransform="capitalize"
          component={Link}
          to={`/user/${relatedPost.author._id}`}
          onClick={(e) => e.stopPropagation()}
          className="underline"
        >
          {relatedPost.author.name}
        </Typography>
      </div>
    </div>
  );
}
