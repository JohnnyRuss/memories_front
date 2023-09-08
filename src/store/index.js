import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/root";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export const persistore = persistStore(store);
