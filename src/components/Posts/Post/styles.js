import {
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  CardActions as MuiCardActions,
  Typography,
  ButtonBase as MuiButtonBase,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
}));

export const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
  backgroundPosition: "top",
}));

export const CardActions = styled(MuiCardActions)(({ theme }) => ({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "auto",

  "& button": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  "& button span.text": {
    lineHeight: "1",
  },
}));

export const ButtonBase = styled(MuiButtonBase)(({ theme }) => ({
  display: "block",
  textAlign: "initial",
}));

export const CardContentTags = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  lineClamp: 1,
  WebkitLineClamp: 1,
}));

export const CardContentTitle = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  lineClamp: 2,
  WebkitLineClamp: 2,
}));

export const CardContentDescription = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  lineClamp: 4,
  WebkitLineClamp: 4,
}));
