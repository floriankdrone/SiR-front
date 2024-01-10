import { useUserIndex } from "../../queries/user";

function useAdminModuleController() {
  const { data: users = [] } = useUserIndex();

  return {
    users,
  };
}

export default useAdminModuleController;
