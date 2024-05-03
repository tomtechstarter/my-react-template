import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthMutations from "../../../api/v1/auth/AuthMutations";
import TokenHandler from "../../../utils/TokenHandler";
import UserQueries from "../../../api/v1/user/UserQueries";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  async function loginUser(email, password) {
    try {
      const result = await AuthMutations.loginUser(email, password);
      if (result.user) {
        setUser(result.user);
        navigate("/profile");
        return user;
      }
    } catch (e) {
      return { error: e };
    }
  }

  function logoutUser() {
    setUser(null);
    TokenHandler.deleteAccessToken();
  }

  async function loadCurrentUser() {
    const result = await UserQueries.fetchCurrentUser();

    if (result.user) {
      setUser(result.user);
    }
  }

  useEffect(() => {
    loadCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
