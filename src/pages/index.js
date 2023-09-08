import { lazy } from "react";

export const HomePage = lazy(() => import("./Home/HomePage"));
export const AuthPage = lazy(() => import("./Auth/AuthPage"));
export const RegisterPage = lazy(() => import("./Auth/RegisterPage"));
