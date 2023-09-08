import SignInForm from "components/Auth/SignInForm";
import { RouterHistory } from "config/router";

RouterHistory.redirectAuthorized();

export default function AuthPage() {
  return <SignInForm />;
}
