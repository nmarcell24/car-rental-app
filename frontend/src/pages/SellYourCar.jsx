import React, { useEffect, useState } from "react";
import { TextField, MenuItem, Autocomplete, Alert } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Create } from "@mui/icons-material";
import { Link, useNavigate } from "react-router";
import { useUserContext } from "../hooks/useUserContext";
import axios from "axios";
import ErrorSnackbar from "../components/ErrorSnackBar";
import dayjs from "dayjs";

//Dummy data
const carTypes = [
  "Sedan",
  "SUV",
  "Truck",
  "Convertible",
  "Coupe",
  "Hatchback",
  "Van",
  "Wagon",
];
const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissionTypes = ["Manual", "Automatic"];
const driveTrains = ["FWD", "RWD", "AWD", "4WD"];
const numberInputs = ["horsePower", "modelYear", "numberOfSeats"];
const priceCategories = ["Low", "Mid", "High"];
const carBrands = [
  "Toyota",
  "Ford",
  "BMW",
  "Mercedes",
  "Honda",
  "Audi",
  "Tesla",
  "Chevrolet",
];

const SellCarForm = () => {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();
  const [priceCategoryId, setPriceCategoryId] = useState("");
  const [created, setCreated] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [carDetails, setCarDetails] = useState({
    brand: "",
    carType: "",
    horsePower: 0,
    modelYear: 0,
    numberOfSeats: 0,
    fuelType: "",
    transmissionType: "",
    driveTrain: "",
    imageUrl: "./images/placeholder.svg",
  });

  if (created) {
    setTimeout(() => {
      setCreated(false);
    }, 4000);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (numberInputs.includes(name)) {
      setCarDetails((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setCarDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (carDetails.horsePower <= 0) {
      newErrors.horsePower = "Horse Power must be a positive number";
    }
    if (
      carDetails.modelYear < dayjs().subtract(100, "year").get("year") ||
      carDetails.modelYear > dayjs().year()
    ) {
      newErrors.modelYear =
        "Model Year must be between " +
        dayjs().subtract(100, "year").get("year") +
        " and current year";
    }
    if (carDetails.numberOfSeats <= 0) {
      newErrors.numberOfSeats = "Number of Seats must be a positive number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    axios
      .post("api/car/create", {
        ...carDetails,
        priceCategoryId:
          priceCategoryId === "Low" ? 0 : priceCategoryId === "Mid" ? 1 : 2,
      })
      .then(() => setCreated(true))
      .catch((err) => {
        setError(
          err?.response?.data?.message ||
            "An error occurred while creating the car"
        );
      });
  };

  if (!currentUser) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">No user is logged in.</h1>
        <Link to={"/"} className="">
          Go to homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 md:w-[70vw] mx-auto rounded-2xl my-10">
      <h2 className="text-4xl font-bold mb-10">Publish Your Car!</h2>
      <h4 className="text-2xl font-bold flex items-center">
        <Create className="bg-[#f1c656] rounded-full p-1 mr-3" />
        Details
      </h4>
      <p className="text-gray-500 pb-5 pt-2">
        Please fill in the fileds below abour your car!
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-10 py-5 rounded-2xl shadow-md"
      >
        <Autocomplete
          options={carBrands}
          renderInput={(params) => (
            <TextField {...params} label="Brand" variant="outlined" required />
          )}
          onChange={(_, value) =>
            setCarDetails((prev) => ({ ...prev, brand: value }))
          }
        />
        <Autocomplete
          options={carTypes}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Car Type"
              variant="outlined"
              required
            />
          )}
          onChange={(_, value) =>
            setCarDetails((prev) => ({ ...prev, carType: value }))
          }
        />
        <TextField
          label="Horse Power"
          name="horsePower"
          fullWidth
          error={!!errors.horsePower}
          helperText={errors.horsePower}
          variant="outlined"
          type="number"
          onChange={handleChange}
          required
        />
        <TextField
          label="Model Year"
          name="modelYear"
          fullWidth
          error={!!errors.modelYear}
          helperText={errors.modelYear}
          variant="outlined"
          type="number"
          onChange={handleChange}
          required
        />
        <TextField
          label="Number of Seats"
          name="numberOfSeats"
          fullWidth
          error={!!errors.numberOfSeats}
          helperText={errors.numberOfSeats}
          variant="outlined"
          type="number"
          onChange={handleChange}
          required
        />
        <TextField
          select
          label="Fuel Type"
          name="fuelType"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          required
        >
          {fuelTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Transmission Type"
          name="transmissionType"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          required
        >
          {transmissionTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Drive Train"
          name="driveTrain"
          fullWidth
          variant="outlined"
          onChange={handleChange}
          required
        >
          {driveTrains.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Price Category"
          name="priceCategoryId"
          fullWidth
          variant="outlined"
          onChange={(e) => setPriceCategoryId(e.target.value)}
          required
        >
          {priceCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
        <button
          type="submit"
          className="w-full py-2 bg-[#f1c656] hover:grayscale-25 text-white font-bold rounded-xl shadow-md  transition"
        >
          Submit
        </button>
      </form>

      <AnimatePresence initial={false}>
        {created ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-2 right-2 z-20"
          >
            <Alert variant="filled" severity="success">
              Car created successfully.
            </Alert>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <ErrorSnackbar error={error} onClose={() => setError("")} />
    </div>
  );
};

export default SellCarForm;
