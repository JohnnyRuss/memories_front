import { Avatar as MuiAvatar } from "@mui/material";

export default function Avatar({ username = "" }) {
  return (
    <MuiAvatar alt="username" src="">
      {username.charAt(0).toUpperCase()}
    </MuiAvatar>
  );
}
