import Feedback from "../../shared_views/Feedback";
import LoginForm from "./views/LoginForm";
import useSigninModuleController from "./useSigninModuleController";

function SigninModule() {
  const { handleLogin, failedToSignIn, successfulSignIn } =
    useSigninModuleController();

  return (
    <>
      <LoginForm handleLogin={handleLogin} />
      {failedToSignIn ? <Feedback message={"Failed to Login"} /> : ""}
      {successfulSignIn ? <Feedback message={"Welcome"} /> : ""}
    </>
  );
}

export default SigninModule;
