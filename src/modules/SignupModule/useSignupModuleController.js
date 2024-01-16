import { useCallback } from "react";
import { useAuthenticationCreate } from "../../queries/authentication";
import { useNavigate } from "react-router-dom";

const useSignupModuleController = () => {
  const navigate = useNavigate();
  const {
    mutate: register,
    isLoading: isSigningUp,
    isError: failedToSignUp,
    isSuccess: successfulSignUp,
  } = useAuthenticationCreate();

  const onSignupSuccess = useCallback(
    () => navigate("/home", { state: { toastMessage: "Welcome" } }),
    [navigate]
  );

  const handleSignup = useCallback(
    (data) => register(data, { onSuccess: onSignupSuccess }),
    [register, onSignupSuccess]
  );

  return {
    handleSignup,
    isSigningUp,
    failedToSignUp,
    successfulSignUp,
  };
};

export default useSignupModuleController;
