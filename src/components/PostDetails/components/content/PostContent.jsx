import { useDispatch } from "react-redux";
import { postActions } from "store/reducers/postsSlice";

import { Divider } from "@mui/material";
import PostContentHead from "./PostContentHead";
import PostContentBody from "./PostContentBody";
import PostActions from "./PostActions";
import PostContentSkeleton from "./PostContentSkeleton";
import styles from "../../postDetails.module.css";

export default function PostContent({ post, loading }) {
  const dispatch = useDispatch();

  const onEdit = () => dispatch(postActions.setPostToEdit(post));
  const onCancelEdit = () => dispatch(postActions.clearPostToEdit());

  return loading ? (
    <PostContentSkeleton />
  ) : post ? (
    <div className={styles.postDetailsSection}>
      <PostContentHead
        title={post.title}
        author={post.author}
        createdAt={post.createdAt}
        tags={post.tags}
      />

      <PostContentBody text={post.text} image={post.image} title={post.title} />

      <PostActions
        postId={post._id}
        likesCount={post.likeCount}
        likes={post.likes}
        authorId={post.author._id}
        onEdit={onEdit}
        onCancelEdit={onCancelEdit}
      />

      <Divider style={{ margin: "20px 0" }} />
    </div>
  ) : (
    <></>
  );
}
