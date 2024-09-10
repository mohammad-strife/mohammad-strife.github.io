import { configureStore } from "@reduxjs/toolkit";
import jwtReducer from "./jwt/jwtSlice";

export const store = configureStore({
  reducer: {
    jwt: jwtReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
