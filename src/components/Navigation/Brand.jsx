import { Link } from "react-router-dom";

import LogoImage from "assets/logo.png";

import * as MuiStyled from "./styles/styles";
import styles from "./styles/styles.module.css";

export default function Brand() {
  return (
    <div className={styles.brand_container}>
      <MuiStyled.LogoTypography
        variant="h2"
        component={Link}
        to="/"
        align="center"
        fontFamily="bebas neue"
      >
        MEMORIES
      </MuiStyled.LogoTypography>

      <img
        className={styles.logo}
        src={LogoImage}
        alt="memories"
        height="50"
        width="50"
      />
    </div>
  );
}
