import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { asyncTimeout, LocalStorage } from "shared/lib";

export interface AuthState {
  isInitialize: boolean;
  loading: "idle" | "loading" | "success" | "error";
}

const initialState: AuthState = {
  isInitialize: false,
  loading: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initApp: (state) => {
      state.isInitialize = !!LocalStorage.getUserJWT();
    },
    logoutApp: (state) => {
      LocalStorage.clearUserJWT();
      state.isInitialize = false;
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAppInitialize.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchAppInitialize.fulfilled, (state, action) => {
      state.isInitialize = action.payload;
      state.loading = "success";
    });
    builder.addCase(fetchAppInitialize.rejected, (state) => {
      state.loading = "error";
    });
  },
});

export const fetchAppInitialize = createAsyncThunk<boolean>(
  "auth/fetchAppInitialize",
  async () => {
    await asyncTimeout(2000);
    LocalStorage.setUserJWT("initial-value");
    return true;
  }
);
