import { styled } from "@mui/material/styles";
import { AppBar as MuiAppBar } from "@mui/material";

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  marginBottom: "20px",
  padding: "15px 10px 10px 10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  borderRadius: "5px",
}));
