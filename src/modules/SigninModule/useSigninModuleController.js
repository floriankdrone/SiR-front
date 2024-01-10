import { useSessionCreate } from "../../queries/authentication";

const useSigninModuleController = () => {
  const {
    mutateAsync: login,
    isLoading: isSigningIn,
    isError: failedToSignIn,
  } = useSessionCreate();

  return {
    handleLogin: (data) => {
      console.log(
        "🚀 ~ file: useSigninModuleController.js:4 ~ useSigninModuleController ~ data:",
        data
      );
      login(data);
    },
    isSigningIn,
    failedToSignIn,
  };
};

export default useSigninModuleController;
