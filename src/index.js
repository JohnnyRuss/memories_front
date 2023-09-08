import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material/styles";
import AppProvider from "providers/AppProvider";

import store, { persistore } from "store";
import theme from "styles/MuiTheme";

import App from "./App";
import "styles/index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistore} loading={null}>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <App />
          </AppProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
