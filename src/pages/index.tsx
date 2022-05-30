/**
 * Level: App -> Processes -> Pages
 * Name: Pages
 * Slice: application pages
 * Structure:
 *      -{some-page}/
 *          - lib/      # infrastructure logic (helpers/utils)
 *          - model/    # business logic
 *          - ui/       # ui logic
 */

import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "shared/config";
import { AuthLayout, PublicLayout } from "widgets/layouts";
import { PrivateHeader, PublicHeader } from "widgets/headers";
import { useAppDispatch } from "entities/store";
import { authActions } from "entities/auth";

const Home = lazy(() => import("./home"));
const Login = lazy(() => import("pages/login"));
const Protected = lazy(() => import("./protected"));

const Pages = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.initApp());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={ROUTES.home} element={<Home />} />
      <Route element={<PublicLayout header={<PublicHeader />} />}>
        <Route path={ROUTES.login} element={<Login />} />
      </Route>
      <Route element={<AuthLayout header={<PrivateHeader />} />}>
        <Route path={ROUTES.protected} element={<Protected />} />
      </Route>
    </Routes>
  );
};

export default Pages;
