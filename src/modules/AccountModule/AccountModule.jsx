import useAccountModuleController from "./useAccountModuleController";
import AccountForm from "./views/AccountForm";

function AccountModule() {
  const { defaultData, handleSave } = useAccountModuleController();
  return <AccountForm handleSave={handleSave} defaultData={defaultData} />;
}

export default AccountModule;
