import { compose } from "@reduxjs/toolkit";
import withRouter from "./withRouter";
import withRedux from "./withRedux";
import withErrorBoundary from "./withErrorBoundary";

export const withHocs = compose<() => JSX.Element>(
  withRouter,
  withRedux,
  withErrorBoundary
);
