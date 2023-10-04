import { usePostQuery } from "hooks/api";

import { Button } from "@mui/material";
import { Delete, ThumbUpAlt, ThumbUpAltOutlined } from "@mui/icons-material";
import * as MuiStyled from "./styles/PostCard.styled";

export default function PostCardActions({
  postId,
  likes,
  likeCount,
  currentUserId,
  isCurrentUser,
}) {
  const { onDelete, onReaction } = usePostQuery(postId);

  return (
    <MuiStyled.CardActions>
      <Button size="small" onClick={onReaction}>
        {likes.includes(currentUserId) ? (
          <ThumbUpAlt />
        ) : (
          <ThumbUpAltOutlined />
        )}
        <span className="text">like {likeCount}</span>
      </Button>
      {isCurrentUser && (
        <Button size="small" onClick={onDelete} color="error">
          <Delete />
          <span className="text">delete</span>
        </Button>
      )}
    </MuiStyled.CardActions>
  );
}
