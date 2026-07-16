import { createContext, useContext, useEffect, useState } from "react";
import {
  loginUser,
  registerUser,
  getProfile,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  useEffect(() => {
    const loadUser = async () => {
      if (!token) return;

      try {
        const data = await getProfile(token);

        setUser(data.user);

      } catch (error) {

        console.log(error);

        logout();

      }
    };

    loadUser();

  }, [token]);

  const register = async (formData) => {
    return await registerUser(formData);
  };

  const login = async (formData) => {

    const data = await loginUser(formData);

    localStorage.setItem("token", data.token);

    setToken(data.token);

    setUser(data.user);

    return data;
  };

  const logout = () => {

    localStorage.removeItem("token");

    setToken("");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);