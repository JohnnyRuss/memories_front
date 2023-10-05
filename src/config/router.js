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
    children: [],
  },
  {
    path: "/posts",
    name: "home-page",
    Element: <Pages.HomePage />,
    children: [],
  },
  {
    path: "/posts/search",
    name: "search-page",
    Element: <Pages.HomePage />,
    children: [],
  },
  {
    path: "/posts/:postId",
    name: "home-page",
    Element: <Pages.PostDetailsPage />,
    children: [],
  },
  {
    path: "/user/:userId",
    name: "user-profile-page",
    Element: <Pages.UserProfilePage />,
    children: [
      {
        path: "memories",
        name: "user-memories-page",
        Element: <Pages.UserMemoriesPage />,
      },
      {
        path: "liked-memories",
        name: "user-liked-memories-page",
        Element: <Pages.LikedMemoriesPage />,
      },
    ],
  },
  {
    path: "/auth/sign-in",
    name: "auth-sign-in-page",
    Element: <Pages.AuthPage />,
    children: [],
  },
  {
    path: "/auth/sign-up",
    name: "auth-sign-up-page",
    Element: <Pages.RegisterPage />,
    children: [],
  },
];
