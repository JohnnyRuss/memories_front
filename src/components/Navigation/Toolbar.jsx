import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCurrentUser,
  selectIsAuthenticated,
} from "store/selectors/authSelectors";
import { logoutUserQuery } from "store/thunks/auth.thunk";

import { Button } from "@mui/material";
import * as MuiStyled from "./styles/styles";
import styles from "./styles/styles.module.css";

export default function Toolbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const onLogout = () => dispatch(logoutUserQuery());

  return (
    <MuiStyled.Toolbar>
      {isAuthenticated ? (
        <div className={styles.user_profile}>
          <MuiStyled.Avatar alt="username" src="">
            {user.name.charAt(0).toUpperCase()}
          </MuiStyled.Avatar>
          {/* <MuiStyled.UserNameTypography variant="h6">
            {user.name}
          </MuiStyled.UserNameTypography> */}
          <MuiStyled.LogoutButton variant="contained" onClick={onLogout}>
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
