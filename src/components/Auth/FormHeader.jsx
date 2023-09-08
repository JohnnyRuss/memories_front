import { Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";
import * as MuiStyled from "./styles/styles";

import LogoImage from "assets/logo.png";

export default function FormHeader({ title }) {
  return (
    <>
      <MuiStyled.Avatar src={LogoImage}>
        <Lock />
      </MuiStyled.Avatar>

      <Typography
        variant="h5"
        sx={{
          fontWeight: "500",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        {title}
      </Typography>
    </>
  );
}
