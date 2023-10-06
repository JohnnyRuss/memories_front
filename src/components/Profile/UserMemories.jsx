/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { postActions } from "store/reducers/postsSlice";

import { PostsList } from "components/layouts";

export default function UserMemories() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(postActions.resetAllPostsPage());
    };
  }, []);

  return <PostsList gridProps={{ xs: 12, sm: 6, lg: 3 }} />;
}
