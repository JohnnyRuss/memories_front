import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MuiTypography from "@mui/material/Typography";
import MuiAvatar from "@mui/material/Avatar";
import MuiToolbar from "@mui/material/Toolbar";
import MuiButton from "@mui/material/Button";

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const LogoTypography = styled(MuiTypography)(({ theme }) => ({
  color: "rgba(0,183,255, 1)",
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "400px",
}));

export const Avatar = styled(MuiAvatar)(({ theme }) => ({
  // color: theme.palette.getContrastText(deepPurple[500]),
  // backgroundColor: deepPurple[500],
}));

export const UserNameTypography = styled(MuiTypography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const LogoutButton = styled(MuiButton)(({ theme }) => ({}));
