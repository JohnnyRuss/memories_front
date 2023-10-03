import { useDispatch } from "react-redux";
import { postActions } from "store/reducers/postsSlice";

import PostContentHead from "./PostContentHead";
import PostContentBody from "./PostContentBody";
import PostActions from "./PostActions";
import styles from "../../postDetails.module.css";

export default function PostContent({ post }) {
  const dispatch = useDispatch();
  const onEdit = () => dispatch(postActions.setPostToEdit(post));
  const onCancelEdit = () => dispatch(postActions.clearPostToEdit());

  return (
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
    </div>
  );
}
