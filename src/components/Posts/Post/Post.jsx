import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { postActions } from "store/reducers/postsSlice.js";
import { deletePostQuery, likePostQuery } from "store/thunks/posts.thunk.js";
import { selectDeletePostLoadingStatus } from "store/selectors/postSelectors.js";

import useIsCurrentUser from "hooks/auth/useIsCurrentUser.js";
import { useDialogContext } from "providers/DialogProvider.jsx";

import { Spinner } from "components/layouts";
import { CardContent, Button, Typography } from "@mui/material";
import { ThumbUpAlt, Delete, Upgrade } from "@mui/icons-material";
import * as MuiStyled from "./styles.js";
import styles from "./styles.module.css";

export default function Post({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { onOpenDialog } = useDialogContext();
  const { deletingPostId, status } = useSelector(selectDeletePostLoadingStatus);

  const { isCurrentUser, currentUserId } = useIsCurrentUser(post.author._id);

  const onEdit = () => dispatch(postActions.setPostToEdit(post));

  const onDelete = () => {
    dispatch(postActions.setDeletingPost(post._id));
    onOpenDialog({
      title: "Delete Post",
      message: "Are you sure you want to delete this post ?",
      onConfirm: () => dispatch(deletePostQuery({ postId: post._id })),
    });
  };

  const onReaction = () =>
    dispatch(likePostQuery({ postId: post._id, currentUserId }));

  const onOpenPost = () => navigate(`/posts/${post._id}`);

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
            <Button size="small" onClick={onEdit}>
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
            <ThumbUpAlt />
            <span className="text">like {post.likeCount}</span>
          </Button>
          {isCurrentUser && (
            <Button size="small" onClick={onDelete}>
              <Delete />
              <span className="text">delete</span>
            </Button>
          )}
        </MuiStyled.CardActions>
      )}
    </MuiStyled.Card>
  );
}
