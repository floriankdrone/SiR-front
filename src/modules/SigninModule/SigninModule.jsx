import Feedback from "../../shared_views/Feedback";
import LoginForm from "./views/LoginForm";
import useSigninModuleController from "./useSigninModuleController";

function SigninModule() {
  const { handleLogin, failedToSignIn, isSigningIn } =
    useSigninModuleController();

  return (
    <>
      <h1>Signin</h1>
      <LoginForm handleLogin={handleLogin} />
      {failedToSignIn ? <Feedback message={"Failed to Login"} /> : ""}
    </>
  );
}

export default SigninModule;
