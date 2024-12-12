import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog";
import commonReducer from "./common";
import authReducer from "./auth"

export const rootReducer = configureStore({
  reducer: {
    blog: blogReducer,
    common: commonReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof rootReducer.getState>;
export type AppDispatch = typeof rootReducer.dispatch;
