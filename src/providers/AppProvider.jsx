import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RouterHistory } from "config/router";
import { useRestrictAuthorized } from "hooks/auth";

const AppContext = createContext({});

export default function AppProvider({ children }) {
  const { redirectAuthorized } = useRestrictAuthorized();

  RouterHistory.navigate = useNavigate();
  RouterHistory.location = useLocation();
  RouterHistory.redirectAuthorized = redirectAuthorized;

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
