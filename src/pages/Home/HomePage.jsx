/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { usePostQuery } from "hooks/api";
import Home from "components/Home/Home";

export default function HomePage() {
  const { pageQuery, searchQuery, tagsQuery, getAllPosts } = usePostQuery();

  useEffect(() => {
    getAllPosts();
  }, [pageQuery, searchQuery, tagsQuery]);

  return <Home />;
}
