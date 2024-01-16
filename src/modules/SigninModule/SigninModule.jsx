import Feedback from "../../shared_views/Feedback";
import SigninForm from "./views/SigninForm";
import useSigninModuleController from "./useSigninModuleController";

function SigninModule() {
  const { handleSignin, failedToSignIn } = useSigninModuleController();

  return (
    <>
      <SigninForm handleSignin={handleSignin} />
      {failedToSignIn ? <Feedback message={"Failed to Login"} /> : ""}
    </>
  );
}

export default SigninModule;
