import { lazy } from "react";

export const HomePage = lazy(() => import("./Home/HomePage"));
export const AuthPage = lazy(() => import("./Auth/AuthPage"));
export const RegisterPage = lazy(() => import("./Auth/RegisterPage"));
export const PostDetailsPage = lazy(() =>
  import("./PostDetails/PostDetailsPage")
);
export const UserProfilePage = lazy(() => import("./Profile/UserProfilePage"));
export const UserMemoriesPage = lazy(() =>
  import("./Profile/UserMemoriesPage")
);
export const LikedMemoriesPage = lazy(() =>
  import("./Profile/LikedMemoriesPage")
);
