import { Paper as MuiPaper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const ClearButton = styled(Button)(({ theme }) => ({
  marginBottom: 10,
  background: theme.palette.app_red,
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginBottom: 10,
  background: theme.palette.app_blue,
}));
