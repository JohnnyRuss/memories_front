import { useRef } from "react";

import { useIsAuthenticatedUser } from "hooks/auth";

import WriteComment from "./WriteComment";
import CommentsList from "./CommentsList";
import styles from "./comments.module.css";

export default function Comments({ loading, postId }) {
  const commentRef = useRef(null);

  const { isAuthenticated } = useIsAuthenticatedUser({ checkOnMount: true });

  return (
    <div className={styles.commentsContainer}>
      <CommentsList
        isAuthenticated={isAuthenticated}
        ref={commentRef}
        loading={loading}
      />

      {isAuthenticated && (
        <WriteComment
          postId={postId}
          commentRef={commentRef}
          loading={loading}
        />
      )}
    </div>
  );
}
