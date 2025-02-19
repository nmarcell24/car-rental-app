import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useUserContext } from "../hooks/useUserContext";

export default function SignUp({ setOpenDialog }) {
  const [errors, setErrors] = useState({});
  const [birthDate, setBirthDate] = useState(dayjs("2022-10-04"));
  const { setCurrentUser } = useUserContext();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters and spaces";
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
    // if (formData.password !== formData.passwordAgain) {
    //   newErrors.passwordAgain = "Passwords do not match";
    // }
    if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }
    if (!/^[a-zA-Z0-9\s,.-]+$/.test(formData.address)) {
      newErrors.address = "Invalid address format";
    }
    setErrors(newErrors);

    console.log(errors);
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

      console.log({ ...formData, dayOfBirth: birthDate.format("YYYY-MM-DD") });

      axios
        .post(
          "/api/users/usercreate",
          {
            ...formData,
            dayOfBirth: birthDate.format("YYYY-MM-DD"),
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(({ data }) => {
          setCurrentUser(data);
          setOpenDialog(false);
        })
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
            className="!mt-4 w-full"
            onChange={(nW) => setBirthDate(nW)}
            value={birthDate}
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
            onClick={() => setOpenDialog(false)}
          >
            Sign In
          </Button>
        </div>
      </Box>
    </div>
  );
}
