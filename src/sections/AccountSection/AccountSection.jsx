import React from "react";
import { Navigate } from "react-router-dom";

import AccountModule from "../../modules/AccountModule/AccountModule";
import { useAuthentication } from "../../hooks/useAuthentication";

function AccountSection() {
  const { isAuthenticated } = useAuthentication();

  if (!isAuthenticated) return <Navigate to="/" />;
  return <AccountModule />;
}

export default AccountSection;
