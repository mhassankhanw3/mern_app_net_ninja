import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const user = useContext(AuthContext);

  if (!user) {
    throw new Error(
      "useAuthContext must be used within a AuthContextProvider"
    );
  }

  return user;
};
