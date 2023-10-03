/* eslint-disable react-hooks/exhaustive-deps */
import * as jwt from "utils/jwt";
import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectIsAuthenticated } from "store/selectors/authSelectors";
import { authActions } from "store/reducers/authSlice";
import { PUBLIC_ROUTES } from "config/routes";

export default function useIsAuthenticatedUser({
  checkOnMount = true,
  redirectUnAuthorized = true,
  redirectPath,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isAuthenticatedUser = useSelector(selectIsAuthenticated);

  function stopCheck() {
    setLoading(false);

    if (isAuthenticated) {
      setIsAuthenticated(false);
      dispatch(authActions.clearUser());
    }

    if (
      redirectUnAuthorized &&
      !PUBLIC_ROUTES.some((route) => pathname.match(route))
    )
      navigate(redirectPath || "/", { replace: true });

    return false;
  }

  function decodeToken(token) {
    try {
      const decodedToken = jwt_decode(token);

      return {
        _id: decodedToken._id,
        email: decodedToken.email,
        iat: decodedToken.iat,
        exp: decodedToken.exp,
      };
    } catch (error) {
      return false;
    }
  }

  async function checkAuthAsync() {
    try {
      const token = jwt.getPassport() || "";

      if (!token) return stopCheck();

      const decodedToken = decodeToken(token);

      if (decodedToken === false || !isAuthenticatedUser) return stopCheck();

      setIsAuthenticated(true);

      setLoading(false);

      return true;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    if (!checkOnMount) return;

    (async () => {
      await checkAuthAsync();
    })();
  }, [isAuthenticatedUser, checkOnMount, pathname]);

  return {
    loading,
    isAuthenticated,
    checkAuthAsync,
  };
}
