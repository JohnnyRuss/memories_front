import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { postActions } from "store/reducers/postsSlice.js";
import { selectDeletePostLoadingStatus } from "store/selectors/postSelectors.js";

import { usePostQuery } from "hooks/api";
import useIsCurrentUser from "hooks/auth/useIsCurrentUser.js";

import {
  ThumbUpAlt,
  ThumbUpAltOutlined,
  Delete,
  Upgrade,
} from "@mui/icons-material";
import { Spinner } from "components/layouts";
import { CardContent, Button, Typography } from "@mui/material";

import * as MuiStyled from "./PostCard.styled";
import styles from "./postCard.module.css";

export default function PostCard({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { deletingPostId, status } = useSelector(selectDeletePostLoadingStatus);

  const { isCurrentUser, currentUserId } = useIsCurrentUser(post.author._id);

  const { onDelete, onReaction } = usePostQuery(post._id);

  const onEdit = (e) => {
    e.stopPropagation();
    dispatch(postActions.setPostToEdit(post));
  };

  const onOpenPost = (e) => {
    e.stopPropagation();
    navigate(`/posts/${post._id}`);
  };

  return (
    <MuiStyled.Card>
      {deletingPostId === post._id && status.loading && (
        <Spinner type="absolute" />
      )}
      <MuiStyled.ButtonBase component="span" onClick={onOpenPost}>
        <MuiStyled.CardMedia image={post.image} title={post.title} />

        <div className={styles.overlay}>
          <Typography variant="h6" textTransform="capitalize">
            {post.author.name}
          </Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>

        {isCurrentUser && (
          <div className={styles["overlay_secondary"]}>
            <Button
              size="small"
              onClick={onEdit}
              title="update memory"
              variant="contained"
            >
              <Upgrade />
            </Button>
          </div>
        )}

        <div className={styles.details}>
          <MuiStyled.CardContentTags
            variant="body2"
            component="h2"
            title={post.tags.map((tag) => `#${tag} `)}
          >
            {post.tags.map((tag) => `#${tag} `)}
          </MuiStyled.CardContentTags>
        </div>

        <MuiStyled.CardContentTitle
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            padding: "0 16px",
          }}
          title={post.title}
        >
          {post.title}
        </MuiStyled.CardContentTitle>

        <CardContent>
          <MuiStyled.CardContentDescription
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {post.text}
          </MuiStyled.CardContentDescription>
        </CardContent>
      </MuiStyled.ButtonBase>

      {currentUserId && (
        <MuiStyled.CardActions>
          <Button size="small" onClick={onReaction}>
            {post.likes.includes(currentUserId) ? (
              <ThumbUpAlt />
            ) : (
              <ThumbUpAltOutlined />
            )}
            <span className="text">like {post.likeCount}</span>
          </Button>
          {isCurrentUser && (
            <Button size="small" onClick={onDelete} color="error">
              <Delete />
              <span className="text">delete</span>
            </Button>
          )}
        </MuiStyled.CardActions>
      )}
    </MuiStyled.Card>
  );
}
