import { useCallback, useEffect } from "react";
import { useSessionCreate } from "../../queries/authentication";
import { useNavigate } from "react-router-dom";

const useSigninModuleController = () => {
  const navigate = useNavigate();
  const {
    mutate: login,
    isLoading: isSigningIn,
    isError: failedToSignIn,
    isSuccess: successfulSignIn,
    isLoading: signingIn,
  } = useSessionCreate();

  const onSignupSuccess = useCallback(() => navigate("/home"), [navigate]);

  const handleLogin = (data) => {
    login(data, {
      onSuccess: onSignupSuccess,
    });
  };

  return {
    handleLogin,
    isSigningIn,
    failedToSignIn,
    successfulSignIn,
  };
};

export default useSigninModuleController;
