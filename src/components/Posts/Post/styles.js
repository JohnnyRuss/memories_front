import {
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  CardActions as MuiCardActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
}));

export const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
}));

export const CardActions = styled(MuiCardActions)(({ theme }) => ({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "& button": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  "& button span.text": {
    lineHeight: "1",
  },
}));
