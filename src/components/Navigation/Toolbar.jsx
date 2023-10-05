import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsAuthenticated } from "store/selectors/authSelectors";

import { Button } from "@mui/material";
import UserButton from "./UserButton";
import styles from "./styles/styles.module.css";
import * as MuiStyled from "./styles/Navigation.styled";

export default function Toolbar() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <MuiStyled.Toolbar>
      {isAuthenticated ? (
        <div className={styles.user_profile}>
          <UserButton />
        </div>
      ) : (
        <Button component={Link} to="/auth/sign-in" variant="container">
          Sign In
        </Button>
      )}
    </MuiStyled.Toolbar>
  );
}
