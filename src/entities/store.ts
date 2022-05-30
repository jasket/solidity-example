import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authSlice } from "./auth/model/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, useAppDispatch };
export type { AppDispatch, RootState };
