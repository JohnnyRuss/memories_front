import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import postsReducer from "./postsSlice";
import authReducer from "./authSlice";

const authPersistConfig = {
  storage,
  key: "memories/user",
  whitelist: ["user", "isAuthenticated"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: persistedAuthReducer,
});

export default rootReducer;
