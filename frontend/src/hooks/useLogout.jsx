import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = async () => {
    // remover user from localStorage
    localStorage.removeItem("user");

    // dispatch loogout actiion
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
