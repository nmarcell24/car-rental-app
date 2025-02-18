import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useUserContext } from "../hooks/useUserContext";
import axios from "axios";

export default function SignIn({ setOpenDialog }) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const { setCurrentUser } = useUserContext();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError) {
      alert("Form is invalid! Please check the fields...");
    } else {
      axios
        .post("/users/login", {
          email,
          password,
        })
        .then(({ data }) => setCurrentUser(data))
        .then(() => setOpenDialog(false))
        .catch((error) => alert(error));
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
      <div className="flex justify-center mb-4">
        <img
          src="https://mui.com/static/logo.png"
          alt="MUI Logo"
          className="h-10"
        />
      </div>
      <h5 className="text-center font-bold text-2xl">
        Sign in to your account
      </h5>
      <p className="text-center text-gray-500 mb-4 mt-1">
        Welcome, please sign in to continue
      </p>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          required
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          label="Email"
          type="email"
          margin="normal"
          helperText={emailError ? "Please enter a valid email" : ""}
        />
        <TextField
          required
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          label="password"
          type="password"
          margin="normal"
          helperText={passwordError ? "Incorrect password" : ""}
        />
        <div className="flex items-center justify-center gap-3 mt-3">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="mt-4"
            type="submit"
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="danger"
            className="mt-4"
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </Button>
        </div>
        <div className="mt-3">
          <h1 className="text-gray-500 my-2">Don't have an accound?</h1>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="mt-4"
            onClick={() => setOpenDialog(false)}
          >
            Sign Up
          </Button>
        </div>
      </Box>
    </div>
  );
}
