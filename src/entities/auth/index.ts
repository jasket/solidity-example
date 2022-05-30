import { authSlice, fetchAppInitialize } from "./model/authSlice";
import * as authSelectors from "./model/authSelectors";

const authActions = authSlice.actions;

export { authSelectors, authActions, fetchAppInitialize };
