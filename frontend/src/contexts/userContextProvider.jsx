import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  
  // Clear previous tokens
  useEffect(() => {
      localStorage.clear()
  }, [])

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </userContext.Provider>
  );
};
