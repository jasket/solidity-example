import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "entities/auth";
import { ROUTES } from "shared/config";
import React from "react";

interface PublicLayoutTypes {
  header: React.ReactNode;
}

const PublicLayout = ({ header }: PublicLayoutTypes) => {
  const isInit = useSelector(authSelectors.selectIsInitialize);
  const location = useLocation();

  if (isInit) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate to={ROUTES.protected} state={{ from: location }} replace />
    );
  }

  return (
    <div>
      {header}
      <Outlet />
    </div>
  );
};

export default PublicLayout;
