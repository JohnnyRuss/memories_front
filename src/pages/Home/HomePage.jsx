import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPostsQuery } from "store/thunks/posts.thunk";

import Home from "components/Home/Home";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsQuery());
  }, [dispatch]);

  return <Home />;
}
