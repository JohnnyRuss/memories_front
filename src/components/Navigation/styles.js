import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MuiTypography from "@mui/material/Typography";

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));

export const Logo = styled("img")(({ theme }) => ({
  marginLeft: "15px",
}));

export const Typography = styled(MuiTypography)(({ theme }) => ({
  color: "rgba(0,183,255, 1)",
}));
