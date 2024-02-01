import { useCallback } from "react";
import { useSessionCreate } from "../../queries/authentication";
import { useNavigate } from "react-router-dom";

const useSigninModuleController = () => {
  const navigate = useNavigate();
  const {
    mutate: login,
    isLoading: isSigningIn,
    isError: failedToSignIn,
    isSuccess: successfulSignIn,
  } = useSessionCreate();

  const onSigninSuccess = useCallback(
    () => navigate("/home", { state: { toastMessage: "Welcome Back!" } }),
    [navigate]
  );

  const handleSignin = (data) =>
    login(data, {
      onSuccess: onSigninSuccess,
    });

  return {
    handleSignin,
    isSigningIn,
    failedToSignIn,
    successfulSignIn,
  };
};

export default useSigninModuleController;
