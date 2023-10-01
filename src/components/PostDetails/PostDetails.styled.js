import { styled } from "@mui/material/styles";
import { Paper as MuiPaper, Typography } from "@mui/material";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: "20px",
  borderRadius: "15px",
  minHeight: "90vh",
  display: "flex",
  flexDirection: "column",

  "@media (max-width:500px)": {
    padding: "10px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  "@media (max-width:500px)": {
    fontSize: "26px",
  },
}));
