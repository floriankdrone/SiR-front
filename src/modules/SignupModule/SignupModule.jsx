import Feedback from "../../shared_views/Feedback";
import useSignupModuleController from "./useSignupModuleController";
import SignupForm from "./views/SignupForm";

function SignupModule() {
  const { handleSignup, failedToSignUp } = useSignupModuleController();

  return (
    <>
      <SignupForm handleSignup={handleSignup} />
      {failedToSignUp ? <Feedback message={"Failed to register"} /> : ""}
    </>
  );
}
export default SignupModule;
