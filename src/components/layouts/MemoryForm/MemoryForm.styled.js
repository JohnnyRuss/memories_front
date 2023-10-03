import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ClearButton = styled(Button)(({ theme }) => ({
  marginBottom: 10,
  background: theme.palette.app_red,
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  marginBottom: 10,
  background: theme.palette.app_blue,
}));
