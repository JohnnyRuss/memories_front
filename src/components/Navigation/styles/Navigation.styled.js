import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MuiTypography from "@mui/material/Typography";
import MuiToolbar from "@mui/material/Toolbar";

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

  "@media (max-width:500px)": {
    display: "none",
  },
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "400px",
}));

export const UserNameTypography = styled(MuiTypography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
