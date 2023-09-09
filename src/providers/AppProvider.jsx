import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RouterHistory } from "config/router";
import { useRestrictAuthorized } from "hooks/auth";
import DialogProvider from "./DialogProvider";

const AppContext = createContext({});

export default function AppProvider({ children }) {
  const { redirectAuthorized } = useRestrictAuthorized();

  RouterHistory.navigate = useNavigate();
  RouterHistory.location = useLocation();
  RouterHistory.redirectAuthorized = redirectAuthorized;

  return (
    <AppContext.Provider value={{}}>
      <DialogProvider>{children}</DialogProvider>
    </AppContext.Provider>
  );
}
