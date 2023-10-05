/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserLikedMemoriesQuery } from "store/thunks/posts.thunk";

import LikedMemories from "components/Profile/LikedMemories";

export default function LikedMemoriesPage(props) {
  const dispatch = useDispatch();

  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserLikedMemoriesQuery({ userId }));
  }, []);

  return <LikedMemories />;
}
