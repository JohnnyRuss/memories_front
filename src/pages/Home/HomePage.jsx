/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { getPostsQuery } from "store/thunks/posts.thunk";

import Home from "components/Home/Home";

export default function HomePage() {
  const dispatch = useDispatch();

  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const searchQuery = query.get("search");
  const tagsQuery = query.get("tags");
  const pageQuery = query.get("page");

  useEffect(() => {
    const credentials = {
      page: +pageQuery || 1,
    };

    if (searchQuery) credentials.search = searchQuery;
    if (tagsQuery) credentials.tags = tagsQuery;

    dispatch(getPostsQuery(credentials));
  }, [pageQuery, searchQuery, tagsQuery]);

  return <Home />;
}
