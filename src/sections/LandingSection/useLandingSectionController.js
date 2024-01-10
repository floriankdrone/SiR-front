import { useSearchParams } from "react-router-dom";

function useLandingSectionController() {
  const [searchParams] = useSearchParams();

  return {
    isLogin: searchParams.get("action") !== "signup",
  };
}

export default useLandingSectionController;
