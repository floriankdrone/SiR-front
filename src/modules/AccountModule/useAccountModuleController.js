import { useCallback } from "react";
import { useProfilesShow, useProfilesCreate } from "../../queries/profiles";
import { useNavigate } from "react-router-dom";

function useAccountModuleController() {
  const navigate = useNavigate();
  const { data: defaultData = {} } = useProfilesShow({ retry: false });
  const { mutate: save } = useProfilesCreate();

  const onSaveSuccess = useCallback(
    () =>
      navigate("/home", {
        state: { toastMessage: "Account Settings Saved" },
      }),
    [navigate]
  );

  const handleSave = (data) => save(data, { onSuccess: onSaveSuccess });

  return {
    defaultData,
    handleSave,
  };
}

export default useAccountModuleController;
