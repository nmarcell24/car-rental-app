import React, { useEffect, useState } from "react";
import { Tab, Tabs, TextField, Button, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from "axios";
import { useUserContext } from "../hooks/useUserContext";
import ErrorSnackbar from "../components/ErrorSnackBar";

const UserProfile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { currentUser } = useUserContext();
  const { isUniqueUsername } = useUserContext();
  const [error, setError] = useState("");
  const [userLoans, setUserLoans] = useState([]);

  useEffect(() => {
    const fetchUserLoans = async () => {
      try {
        const { data } = await axios.get("/api/loan/list");
        const userLoans = data.filter((loan) => loan.userId === currentUser.id);

        const loansWithImages = await Promise.all(
          userLoans.map(async (loan) => {
            const res = await axios.get(`/api/car/${loan.carId}`);
            return {
              ...loan,
              imageUrl: res.data.imageUrl,
            };
          })
        );

        setUserLoans(loansWithImages);
      } catch (error) {
        alert(
          "Error fetching loans or car data:",
          error?.response?.data?.message
        );
      }
    };

    fetchUserLoans();
  }, []);

  const [errors, setErrors] = useState({});
  const [dayOfBirth, setDayOfBirth] = useState(dayjs(currentUser.dayOfBirth));
  const [formData, setFormData] = useState({
    name: currentUser.name || "",
    username: currentUser.username || "",
    email: currentUser.email || "",
    password: "",
    phoneNumber: currentUser.phoneNumber || "",
    address: currentUser.address || "",
  });

  const getModifiedFields = () => {
    const modified = {};

    Object.keys(formData).forEach((key) => {
      if (key === "password") {
        if (formData.password && formData.password.trim().length > 0) {
          modified.password = formData.password;
        }
      } else if (formData[key] !== currentUser[key]) {
        modified[key] = formData[key];
      }
    });

    if (
      dayOfBirth?.isValid &&
      !dayOfBirth.isSame(dayjs(currentUser.dayOfBirth))
    ) {
      modified.dayOfBirth = dayOfBirth;
    }

    return modified;
  };

  const validateForm = (dataToValidate) => {
    let newErrors = {};

    if (
      dataToValidate.name !== undefined &&
      !/^[a-záéíóöőúüűÁÉÍÓÖŐÚÜŰA-Z\s]+$/.test(dataToValidate.name)
    ) {
      newErrors.name = "Name must contain only letters and spaces";
    }

    if (dataToValidate.username !== undefined) {
      if (!isUniqueUsername(dataToValidate.username)) {
        newErrors.username = "Username already exists";
      } else if (!/^[a-zA-Z\s]+$/.test(dataToValidate.username)) {
        newErrors.username = "Invalid username";
      }
    }

    if (
      dataToValidate.email !== undefined &&
      !/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/.test(
        dataToValidate.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    if (
      dataToValidate.password !== undefined &&
      dataToValidate.password.trim() !== "" &&
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(
        dataToValidate.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters long, include at least one letter and one number";
    }

    if (
      dataToValidate.phoneNumber !== undefined &&
      !/^[0-9]{11}$/.test(dataToValidate.phoneNumber)
    ) {
      newErrors.phoneNumber = "Invalid phone number";
    }

    if (
      dataToValidate.address !== undefined &&
      !/^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ0-9\s,.-]+$/.test(dataToValidate.address)
    ) {
      newErrors.address = "Invalid address format";
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));

    return Object.keys(newErrors).length === 0;
  };

  const handleTabChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const modifiedFields = getModifiedFields();

    if (Object.keys(modifiedFields).length === 0) {
      setError("No changes to submit.");
      return;
    }

    const { dayOfBirth: _, ...fieldsToValidate } = modifiedFields;
    if (!validateForm(fieldsToValidate)) return;

    try {
      const response = await axios.put(
        `/api/user/${currentUser.id}`,
        modifiedFields
      );
      console.log("Profile updated successfully", response.data);
      setFormData({
        ...response.data,
        password: "",
      });
    } catch (err) {
      setError(
        err?.response?.data?.message || "An error occurred while updating user"
      );
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
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                value={formData.phoneNumber}
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
          <>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              My Rents
            </Typography>
            <div className="max-h-[50vh] overflow-y-scroll">
              {userLoans.map((loan) => (
                <div
                  key={loan.id}
                  className="flex items-center mb-4 bg-gray-50 p-3 rounded-xl text-[120%] px-6"
                >
                  <img
                    src={loan.imageUrl}
                    alt="Car"
                    className="w-45 h-30 rounded-lg mr-4"
                  />
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xl mb-2">{loan.brand}</h1>
                    <p>
                      <span className="text-gray-500">Start Date:</span>{" "}
                      {loan.startDate}
                    </p>
                    <p>
                      <span className="text-gray-500">End Date:</span>{" "}
                      {loan.endDate}
                    </p>
                    <p>
                      <span className="text-gray-500">Total Price:</span>{" "}
                      {loan.totalPrice} HUF
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <ErrorSnackbar error={error} onClose={() => setError("")} />
    </div>
  );
};

export default UserProfile;
