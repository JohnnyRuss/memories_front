import SignInForm from "components/Auth/SignInForm";
import { RouterHistory } from "config/router";
import { useRestrictAuthorized } from "hooks/auth";

RouterHistory.redirectAuthorized();

export default function AuthPage() {
  const { loading } = useRestrictAuthorized(true);

  return loading ? <></> : <SignInForm />;
}
