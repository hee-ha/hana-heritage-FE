import React, { createContext, useContext, useState } from "react";
import { getAuth, signIn, signOut } from "../states/authState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = useState(getAuth());

  const setAuth = (data) => {
    if (data) {
      signIn(data);
      setAuthState(data);
    } else {
      signOut();
      setAuthState(null);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
