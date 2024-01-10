import Feedback from "../../shared_views/Feedback";
import useSignupModuleController from "./useSignupModuleController";
import SignupForm from "./views/SignupForm";

function SignupModule() {
  const { handleSignup, failedToSignUp, successfulSignUp } =
    useSignupModuleController();
  return (
    <>
      <SignupForm handleSignup={handleSignup} />
      {failedToSignUp ? <Feedback message={"Failed to register"} /> : ""}
      {successfulSignUp ? <Feedback message={"Successfully register"} /> : ""}
    </>
  );
}
export default SignupModule;
