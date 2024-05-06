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

  async function registerUser(email, password, name, imageUrl) {
    const result = await AuthMutations.signUpUser(
      email,
      password,
      name,
      imageUrl
    );

    if (result.user) {
      setTimeout(() => {
        navigate("/profile");
      }, 200);
      setUser(result.user);
    }
  }

  function logoutUser() {
    setUser(null);
    TokenHandler.deleteAccessToken();
    navigate("/");
  }

  async function loadCurrentUser() {
    try {
      const result = await UserQueries.fetchCurrentUser();

      if (result.user) {
        setUser(result.user);
      }
    } catch (e) {
      if (e.response.status === 403) {
        logoutUser();
      }
      console.log("HERE IS MY ERROR", e.response.status);
    }
  }

  useEffect(() => {
    loadCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
