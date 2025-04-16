import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useUserContext } from "../hooks/useUserContext";

export default function SignUp({ setOpenDialog, setOpenDialogSignIn }) {
  const [errors, setErrors] = useState({});
  const [birthDate, setBirthDate] = useState(dayjs("2000-10-02"));
  const { signUp, logIn, users } = useUserContext();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    address: "",
  });

  const isUniqueUsername = () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === formData.username) {
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!/^[a-záéíóöőúüűÁÉÍÓÖŐÚÜŰA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters and spaces";
    }
    if (!isUniqueUsername()) {
      newErrors.username = "Username must be unique";
    }
    if (!/^[a-zA-Z\s]+$/.test(formData.username)) {
      newErrors.username = "Invalid username";
    }
    if (
      !/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be at least 8 characters long, include at least one letter and one number";
    }
    if (!/^[0-9]{11}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }
    if (!/^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ0-9\s,.-]+$/.test(formData.address)) {
      newErrors.address = "Invalid address format";
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    } else {
      if (!birthDate.isValid) {
        return;
      }
      signUp({
        ...formData,
        dayOfBirth: birthDate.format("YYYY-MM-DD"),
        role: "COMMON_USER",
      })
        .then(() => {
          return logIn(formData.username, formData.password)
            .then(() => {
              setOpenDialog(false);
            })
            .catch((err) => {
              alert("Login failed");
            });
        })
        .catch((err) => {
          alert(err.response?.data?.message || "Signup failed");
        });
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
      <div className="flex justify-center mb-4">
        <img
          src="/logos/Rento_yellow-cropped.svg"
          alt="Rento Logo"
          className="h-18"
        />
      </div>
      <h5 className="text-center font-bold text-2xl">
        Sign up to start renting
      </h5>
      <p className="text-center text-gray-500 mb-4 mt-1">
        Please sign up to continue
      </p>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-2 gap-x-5">
          <TextField
            fullWidth
            required
            onChange={handleChange}
            error={!!errors.name}
            value={formData.name}
            margin="normal"
            name="name"
            label="Name"
            helperText={errors.name}
          />
          <TextField
            fullWidth
            required
            onChange={handleChange}
            error={!!errors.username}
            value={formData.username}
            margin="normal"
            name="username"
            label="Username"
            helperText={errors.username}
          />
          <TextField
            fullWidth
            required
            onChange={handleChange}
            error={!!errors.email}
            value={formData.email}
            margin="normal"
            name="email"
            label="Email"
            helperText={errors.email}
          />
          <TextField
            fullWidth
            required
            onChange={handleChange}
            error={!!errors.password}
            value={formData.password}
            margin="normal"
            name="password"
            label="Password"
            type="password"
            helperText={errors.password}
          />
          <TextField
            fullWidth
            required
            onChange={handleChange}
            error={!!errors.phoneNumber}
            value={formData.phoneNumber}
            margin="normal"
            name="phoneNumber"
            label="phone"
            type="tel"
            helperText={errors.phoneNumber}
          />
          <TextField
            fullWidth
            required
            onChange={handleChange}
            error={!!errors.address}
            value={formData.address}
            margin="normal"
            name="address"
            label="Address"
            helperText={errors.address}
          />
          <DatePicker
            required
            className="!mt-4 w-full col-span-2"
            onChange={(nW) => setBirthDate(nW)}
            value={birthDate}
            maxDate={dayjs().subtract(17, "year")}
            margin="normal"
            name="birthDate"
            label="Date of Birth"
          />
        </div>
        <div className="flex items-center justify-center gap-3 mt-3">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="mt-4"
            type="submit"
            sx={{ backgroundColor: "#f1c656" }}
          >
            Sign Up
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
          <h1 className="text-gray-500 my-2">Already have an accound?</h1>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className="mt-4"
            onClick={() => {
              setOpenDialog(false);
              setOpenDialogSignIn(true);
            }}
            sx={{ backgroundColor: "#f1c656" }}
          >
            Sign In
          </Button>
        </div>
      </Box>
    </div>
  );
}
