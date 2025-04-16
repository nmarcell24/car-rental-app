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
      await axios
        .get("/api/user/list")
        .then(({ data }) => setUsers(data))
        .catch((err) => console.log(err.message));
    };

    fetchUsers();
  }, []);

  const addAllocates = async (data) => {
    try {
      await axios.post("api/allocate/create", {
        user: data,
        permission: "READ_USER",
      });
      await axios.post("api/allocate/create", {
        user: data,
        permission: "UPDATE_USER",
      });
      await axios.post("api/allocate/create", {
        user: data,
        permission: "CREATE_LOAN",
      });
      await axios.post("api/allocate/create", {
        user: data,
        permission: "LIST_LOANS",
      });
      await axios.post("api/allocate/create", {
        user: data,
        permission: "CREATE_CAR",
      });
    } catch (error) {
      console.log("Failed to add permission:", error.message);
    }
  };

  const signUp = async (userData) => {
    try {
      const res = await axios.post("/api/user/create", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      addAllocates(res.data);
      return res;
    } catch (error) {
      throw error;
    }
  };

  const logIn = async (username, password) => {
    try {
      const res = await axios.post("/api/user/login", {
        username,
        password,
      });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.headers.jwt_token}`;
      setCurrentUser(res.data);
      localStorage.setItem("token", res.headers.jwt_token);
    } catch (error) {
      throw error;
    }
  };

  const isUniqueUsername = (username) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        return false;
      }
    }
    return true;
  };

  return (
    <userContext.Provider
      value={{ currentUser, setCurrentUser, users, signUp, logIn, isUniqueUsername }}
    >
      {children}
    </userContext.Provider>
  );
};
