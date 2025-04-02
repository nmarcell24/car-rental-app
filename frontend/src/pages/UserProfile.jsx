import React, { useEffect, useState } from "react";
import { Tab, Tabs, TextField, Button, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from "axios";
import { useUserContext } from "../hooks/useUserContext";

const UserProfile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { currentUser } = useUserContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      await axios.get("/api/user/list").then(({ data }) => setUsers(data));
    };

    fetchUsers();
  }, []);

  const [errors, setErrors] = useState({});
  const [dayOfBirth, setDayOfBirth] = useState(dayjs(currentUser.dayOfBirth));
  const [formData, setFormData] = useState({
    name: currentUser.name,
    username: currentUser.username,
    email: currentUser.email,
    password: "",
    phone: currentUser.phoneNumber,
    address: currentUser.address,
  });

  const isUniqueUsername = () => {
    if(formData.username === currentUser.username) {
      return true;
    }
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === formData.username) {
        return false;
      }
    }
    return true;
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

  const handleTabChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    } else {
      if (!dayOfBirth.isValid) {
        return;
      }

      axios
        .post(`/api/user/${currentUser.id}`, {
          ...formData,
          dayOfBirth,
        })
        .then((response) => {
          console.log("Profile updated successfully", response.data);
        })
        .catch((error) => {
          console.error("Error updating profile", error);
        });
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full p-10 bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 text-center bg-[#f1c656] p-6 text-white rounded-l-lg">
        <h5 className="text-3xl font-bold">Welcome User</h5>
        <Tabs
          orientation="vertical"
          value={tabIndex}
          onChange={handleTabChange}
          className="mt-4"
        >
          <Tab label="Profile" sx={{ color: "white" }} />
          <Tab label="My Rents" sx={{ color: "white" }} />
        </Tabs>
      </div>

      {/* Content */}
      <div className="w-full md:w-3/4 p-6 bg-white rounded-r-lg py-10">
        {tabIndex === 0 ? (
          <>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Update Profile
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                label="Name"
                name="name"
                error={!!errors.name}
                helperText={errors.name}
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Username"
                name="username"
                error={!!errors.username}
                helperText={errors.username}
                value={formData.username}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                error={!!errors.email}
                helperText={errors.email}
                value={formData.email}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                error={!!errors.password}
                helperText={errors.password}
                value={formData.password}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Phone"
                name="phone"
                error={!!errors.phone}
                helperText={errors.phone}
                value={formData.phone}
                onChange={handleInputChange}
                fullWidth
              />
              <TextField
                label="Address"
                name="address"
                error={!!errors.address}
                helperText={errors.address}
                value={formData.address}
                onChange={handleInputChange}
                fullWidth
              />
              <DatePicker
                required
                fullWidth
                onChange={(nW) => setDayOfBirth(nW)}
                value={dayOfBirth}
                label="Date of Birth"
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                className="!bg-[#f1c656]"
              >
                Update Information
              </Button>
            </div>
          </>
        ) : (
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            My Rents (This is a different tab content)
          </Typography>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
