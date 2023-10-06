import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectDeletePostLoadingStatus } from "store/selectors/postSelectors.js";

import useIsCurrentUser from "hooks/auth/useIsCurrentUser.js";

import { Spinner } from "components/layouts";
import UpdateButton from "./UpdateButton";
import PostCardActions from "./PostCardActions";
import PostCardContent from "./PostCardContent";
import PostCardAuthorAndDate from "./PostCardAuthorAndDate";
import * as MuiStyled from "./styles/PostCard.styled";

export default function PostCard({
  post,
  openModalOnUpdate,
  showActionButtons = true,
}) {
  const navigate = useNavigate();

  const { deletingPostId, status } = useSelector(selectDeletePostLoadingStatus);

  const { isCurrentUser, currentUserId } = useIsCurrentUser(post.author._id);

  const onOpenPost = (e) => {
    e.stopPropagation();
    navigate(`/posts/${post._id}`);
  };

  return (
    <MuiStyled.Card elevation={6}>
      {deletingPostId === post._id && status.loading && (
        <Spinner type="absolute" />
      )}

      <MuiStyled.ButtonBase component="span" onClick={onOpenPost}>
        <MuiStyled.CardMedia image={post.image} title={post.title} />

        <PostCardAuthorAndDate
          author={post.author}
          createdAt={post.createdAt}
        />

        {isCurrentUser && showActionButtons && (
          <UpdateButton post={post} openModalOnUpdate={openModalOnUpdate} />
        )}

        <PostCardContent tags={post.tags} title={post.title} text={post.text} />
      </MuiStyled.ButtonBase>

      {currentUserId && (
        <PostCardActions
          postId={post._id}
          likes={post.likes}
          likeCount={post.likeCount}
          currentUserId={currentUserId}
          isCurrentUser={isCurrentUser}
          showActionButtons={showActionButtons}
        />
      )}
    </MuiStyled.Card>
  );
}
