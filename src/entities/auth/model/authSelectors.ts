import { AuthState } from "./authSlice";

export const selectIsInitialize = (state: { auth: AuthState }) =>
  state.auth.isInitialize;

export const selectLoadingState = (state: { auth: AuthState }) =>
  state.auth.loading;
