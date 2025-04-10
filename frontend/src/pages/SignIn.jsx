import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useUserContext } from "../hooks/useUserContext";
import ErrorSnackbar from "../components/ErrorSnackBar";

export default function SignIn({ setOpenDialog, setOpenDialogSignUp }) {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const { logIn } = useUserContext();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (!/^[a-zA-Z\s]+$/.test(username)) {
      setUsernameError("Username must contain only letters and numbers");
    } else {
      setUsernameError(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!usernameError && !passwordError) {
      logIn(username, password)
        .then(() => setOpenDialog(false))
        .catch((err) => {
          setError(
            err?.response?.data?.message ||
              "An error occurred while creating user account"
          );
        });
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
      <div className="flex justify-center mb-4">
        <img
          src="./logos/Rento_yellow-cropped.svg"
          alt="Rento Logo"
          className="h-18"
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
          value={username}
          onChange={handleUsernameChange}
          error={usernameError}
          label="Username"
          type="text"
          margin="normal"
          helperText={usernameError ? "Please enter a valid username" : ""}
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
            sx={{ backgroundColor: "#f1c656" }}
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
            onClick={() => {
              setOpenDialog(false);
              setOpenDialogSignUp(true);
            }}
            sx={{ backgroundColor: "#f1c656" }}
          >
            Sign Up
          </Button>
        </div>
      </Box>
      <ErrorSnackbar error={error} onClose={() => setError("")} />
    </div>
  );
}
