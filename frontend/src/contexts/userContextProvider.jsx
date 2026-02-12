import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  // ---------------------------------------------------------
  // 1. CONFIGURE AXIOS BASE URL (The Fix for 404s)
  // ---------------------------------------------------------
  // This tells Axios: "Don't look on localhost/Vercel. Look at Render."
  // Make sure you have VITE_API_BASE_URL set in Vercel Environment Variables!
  const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8081";
  axios.defaults.baseURL = API_URL;

  useEffect(() => {
    // -------------------------------------------------------
    // 2. FIX: Don't clear storage on load!
    // -------------------------------------------------------
    // localStorage.clear(); // <--- DELETED THIS. It forced logout on refresh.

    // Instead, restore the session if a token exists:
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const fetchUsers = async () => {
      try {
        // Now this will hit: https://autoberlo.onrender.com/api/user/list
        const { data } = await axios.get("/api/user/list");
        setUsers(data);
      } catch (err) {
        console.log("Error fetching users:", err.message);
      }
    };

    fetchUsers();
  }, []);

  const addAllocates = async (data) => {
    try {
      // Note: Removed leading slash '/' to handle base URLs better
      await axios.post("api/allocate/create", { user: data, permission: "READ_USER" });
      await axios.post("api/allocate/create", { user: data, permission: "UPDATE_USER" });
      await axios.post("api/allocate/create", { user: data, permission: "CREATE_LOAN" });
      await axios.post("api/allocate/create", { user: data, permission: "LIST_LOANS" });
      await axios.post("api/allocate/create", { user: data, permission: "CREATE_CAR" });
    } catch (error) {
      console.log("Failed to add permission:", error.message);
    }
  };

  const signUp = async (userData) => {
    try {
      const res = await axios.post("/api/user/create", userData, {
        headers: { "Content-Type": "application/json" },
      });
      // Pass the actual user object (res.data) to permissions
      await addAllocates(res.data);
      return res;
    } catch (error) {
      throw error;
    }
  };

  const logIn = async (username, password) => {
    try {
      const res = await axios.post("/api/user/login", { username, password });
      
      // Extract token
      const token = res.headers.jwt_token || res.headers.authorization; 
      
      if (token) {
          // Set token for future requests
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          localStorage.setItem("token", token);
      }

      setCurrentUser(res.data);
    } catch (error) {
      throw error;
    }
  };

  const isUniqueUsername = (username) => {
    // Optimized loop
    return !users.some(user => user.username === username);
  };

  return (
    <userContext.Provider
      value={{ currentUser, setCurrentUser, users, signUp, logIn, isUniqueUsername }}
    >
      {children}
    </userContext.Provider>
  );
};