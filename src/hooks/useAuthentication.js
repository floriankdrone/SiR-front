export const useAuthentication = () => {
  const authenticated = !!sessionStorage.getItem("session_start_time");

  return {
    isAuthenticated: authenticated,
  };
};
