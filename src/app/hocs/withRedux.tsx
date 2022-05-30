import { Provider } from "react-redux";
import * as React from "react";
import { store } from "entities/store";

const withRedux = (component: () => React.ReactNode) => () =>
  <Provider store={store}>{component()}</Provider>;

export default withRedux;
