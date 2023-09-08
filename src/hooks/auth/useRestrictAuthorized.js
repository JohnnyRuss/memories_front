import { useIsAuthenticatedUser } from "hooks/auth";
import { useNavigate } from "react-router-dom";

export default function useRedirectIfAuthorized() {
  const navigate = useNavigate();

  const { checkAuthAsync } = useIsAuthenticatedUser({
    checkOnMount: false,
    redirectUnAuthorized: false,
  });

  async function redirectAuthorized() {
    const isAuthorized = await checkAuthAsync();
    console.log({ isAuthorized });
    if (isAuthorized) navigate(-1, { replace: true });
  }

  return { redirectAuthorized };
}
