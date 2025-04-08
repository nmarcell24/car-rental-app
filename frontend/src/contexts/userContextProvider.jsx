import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  // Clear previous tokens
  useEffect(() => {
    localStorage.clear();

    const fetchUsers = async () => {
      await axios.get("/api/user/list")
        .then(({data}) => setUsers(data))
        .catch(err => console.log(err.message))
    }

    fetchUsers();
  }, []);


  return (
    <userContext.Provider value={{ currentUser, setCurrentUser, users }}>
      {children}
    </userContext.Provider>
  );
};
