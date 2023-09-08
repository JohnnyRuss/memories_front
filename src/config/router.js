import * as Pages from "pages";

export const RouterHistory = {
  navigate: null,
  location: null,
  redirectAuthorized: null,
};

export const Router = [
  {
    path: "/",
    name: "home-page",
    Element: <Pages.HomePage />,
  },
  {
    path: "/auth/sign-in",
    name: "auth-sign-in-page",
    Element: <Pages.AuthPage />,
  },
  {
    path: "/auth/sign-up",
    name: "auth-sign-up-page",
    Element: <Pages.RegisterPage />,
  },
];
