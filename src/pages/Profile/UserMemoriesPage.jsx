/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserMemoriesQuery } from "store/thunks/posts.thunk";

import UserMemories from "components/Profile/UserMemories";

export default function UserMemoriesPage() {
  const dispatch = useDispatch();

  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserMemoriesQuery({ userId }));
  }, []);

  return <UserMemories />;
}
