import React from "react";
import HomeModule from "../../modules/HomeModule/HomeModule";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Navigate } from "react-router-dom";

function HomeSection() {
  const { isAuthenticated } = useAuthentication();

  if (!isAuthenticated) return <Navigate to="/" />;

  return <HomeModule />;
}

export default HomeSection;
