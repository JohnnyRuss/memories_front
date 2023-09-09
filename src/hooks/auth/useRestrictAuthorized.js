/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useIsAuthenticatedUser } from "hooks/auth";
import { useNavigate } from "react-router-dom";

export default function useRedirectAuthorized(checkOnMount = false) {
  const navigate = useNavigate();

  const { checkAuthAsync, loading, isAuthenticated } = useIsAuthenticatedUser({
    checkOnMount: false,
    redirectUnAuthorized: false,
  });

  async function redirectAuthorized() {
    const isAuthorized = await checkAuthAsync();
    if (isAuthorized) navigate(-1, { replace: true });
  }

  useEffect(() => {
    if (!checkOnMount) return;

    checkAuthAsync();

    if (isAuthenticated) navigate("/");
  }, [checkOnMount, isAuthenticated]);

  return { redirectAuthorized, loading };
}
