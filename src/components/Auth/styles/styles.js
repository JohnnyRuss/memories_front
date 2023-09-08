import { styled } from "@mui/material/styles";
import MuiPaper from "@mui/material/Paper";
import MuiAvatar from "@mui/material/Avatar";
import MuiButton from "@mui/material/Button";
import MuiContainer from "@mui/material/Container";

// export default makeStyles((theme) => ({
//   googleButton: {
//     marginBottom: theme.spacing(2),
//   },
// }));

export const Container = styled(MuiContainer)(({ theme }) => ({
  position: "fixed",
  inset: "0",
  width: "100%",
  height: "100%",
  padding: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Paper = styled(MuiPaper)(({ theme }) => ({
  maxWidth: "360px",
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const Avatar = styled(MuiAvatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  background: theme.palette.app_blue,
  color: "#fff",
  width: "100%",

  "&:hover": {
    background: theme.palette.app_blue_shade,
  },
}));
