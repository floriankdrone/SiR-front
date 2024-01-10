import React from "react";
import Signin from "../../modules/SigninModule/SigninModule";
import Signup from "../../modules/SignupModule/SignupModule";
import useLandingSectionController from "./useLandingSectionController";

function LandingSection() {
  const { isLogin } = useLandingSectionController();

  return isLogin ? <Signin /> : <Signup />;
}

export default LandingSection;
