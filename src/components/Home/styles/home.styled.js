import { styled } from "@mui/material/styles";
import { Paper, AppBar as MuiAppBar } from "@mui/material";

export const PaginationPaper = styled(Paper)(({ theme }) => ({
  padding: "10px",
  marginTop: "20px",
  display: "flex",
  justifyContent: "center",
}));

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  marginBottom: "20px",
  padding: "15px 10px 10px 10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  borderRadius: "5px",
}));
