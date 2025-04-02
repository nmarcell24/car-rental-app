import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Clear previous tokens
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </userContext.Provider>
  );
};
