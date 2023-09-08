import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import * as MuiStyled from "./styles/styles";
import styles from "./styles/styles.module.css";

export default function Toolbar({ user }) {
  return (
    <MuiStyled.Toolbar>
      {user ? (
        <div className={styles.user_profile}>
          <MuiStyled.Avatar alt="username" src="">
            A
          </MuiStyled.Avatar>
          <MuiStyled.UserNameTypography variant="h6">
            username
          </MuiStyled.UserNameTypography>
          <MuiStyled.LogoutButton variant="contained" onClick={() => {}}>
            Log Out
          </MuiStyled.LogoutButton>
        </div>
      ) : (
        <Button component={Link} to="/auth/sign-in" variant="container">
          Sign In
        </Button>
      )}
    </MuiStyled.Toolbar>
  );
}
