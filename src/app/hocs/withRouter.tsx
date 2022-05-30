import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<span>Loading</span>}>{component()}</Suspense>
    </BrowserRouter>
  );

export default withRouter;
