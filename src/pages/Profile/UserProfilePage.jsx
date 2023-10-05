import Profile from "components/Profile/Profile";
import { Outlet } from "react-router-dom";

export default function UserProfilePage() {
  return (
    <Profile>
      <Outlet />
    </Profile>
  );
}
