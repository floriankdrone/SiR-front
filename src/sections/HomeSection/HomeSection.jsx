import React from "react";
import HomeModule from "../../modules/HomeModule/HomeModule";
import { Navigate } from "react-router-dom";

function HomeSection() {
  const authenticated = !!sessionStorage.getItem("session_start_time");

  if (!authenticated) return <Navigate to="/" />;
  return <HomeModule />;
}

export default HomeSection;
