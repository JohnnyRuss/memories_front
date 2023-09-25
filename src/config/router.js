import * as Pages from "pages";
import { Navigate } from "react-router-dom";

export const RouterHistory = {
  navigate: null,
  location: null,
  redirectAuthorized: null,
};

export const Router = [
  {
    path: "/",
    name: "root",
    Element: <Navigate to="/posts" />,
  },
  {
    path: "/posts",
    name: "home-page",
    Element: <Pages.HomePage />,
  },
  {
    path: "/posts/search",
    name: "search-page",
    Element: <Pages.HomePage />,
  },
  {
    path: "/posts/:postId",
    name: "home-page",
    Element: <Pages.PostDetailsPage />,
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
