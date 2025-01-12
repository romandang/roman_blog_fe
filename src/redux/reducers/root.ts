import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog";
import commonReducer from "./common";
import authReducer from "./auth"

export const rootReducer = () => configureStore({
  reducer: {
    blog: blogReducer,
    common: commonReducer,
    auth: authReducer
  },
});

export type AppStore = ReturnType<typeof rootReducer>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


