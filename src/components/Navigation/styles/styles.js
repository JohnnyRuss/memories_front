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
  justifyContent: "space-between",
  paddingLeft: "20px",
  alignItems: "center",
  background: "#fff",
}));

export const LogoTypography = styled(MuiTypography)(({ theme }) => ({
  color: theme.palette.app_blue,
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
