import RegisterForm from "components/Auth/RegisterForm";
import { RouterHistory } from "config/router";
import { useRestrictAuthorized } from "hooks/auth";

RouterHistory.redirectAuthorized();

export default function RegisterPage() {
  const { loading } = useRestrictAuthorized(true);

  return loading ? <></> : <RegisterForm />;
}
