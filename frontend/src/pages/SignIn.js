
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function SignIn({ setOpenSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validate = () => {
    let tempErrors = { email: "", password: "" };
    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validate()) {
    //   const createUser = async () => {
    //     const res = await fetch("http://localhost:8081/user", {
    //       method: "POST"
    //     })
    //     const data = await res.json();
    //     alert(data);
        console.log("Form submitted", { email, password, remember });
        setOpenSignIn(false)
    //   }

    //   createUser();
    // }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-100 fixed top-0 right-0 z-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <img src="https://mui.com/static/logo.png" alt="MUI Logo" className="h-10" />
        </div>
        <h5 className="text-center font-bold text-2xl">
          Sign in to your account
        </h5>
        <p className="text-center text-gray-500 mb-4 mt-1">
          Welcome, please sign in to continue
        </p>
        <form onSubmit={handleSubmit}>
          <TextField
            error={!!errors.email}
            helperText={errors.email}
            type="email"
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            error={!!errors.password}
            helperText={errors.password}
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center mb-2">
            <Checkbox
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <Typography variant="body2">Remember me</Typography>
          </div>
          <div className="flex items-center justify-center gap-3">
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
              onClick={() => setOpenSignIn(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
