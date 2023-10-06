/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getUserProfileInfoQuery } from "store/thunks/auth.thunk";

import Profile from "components/Profile/Profile";
import { Outlet } from "react-router-dom";

export default function UserProfilePage() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUserProfileInfoQuery({ userId }));
  }, [userId]);

  return (
    <Profile>
      <Outlet />
    </Profile>
  );
}
