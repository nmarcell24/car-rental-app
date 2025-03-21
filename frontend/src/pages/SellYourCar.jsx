import React, { useState } from "react";
import { TextField, MenuItem, Autocomplete, Button } from "@mui/material";
import { motion } from "framer-motion";
import { gsap } from "gsap";

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
const priceCategories = ["Economy", "Standard", "Luxury", "Premium"];
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
  const [carDetails, setCarDetails] = useState({
    brand: "",
    carType: "",
    horsePower: "",
    modelYear: "",
    numberOfSeats: "",
    fuelType: "",
    transmissionType: "",
    driveTrain: "",
    imageUrl: "",
    priceCategoryId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to("#submit-btn", {
      scale: 1.1,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
    });
    console.log("Car details submitted:", carDetails);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-2xl"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Publish Your Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          variant="outlined"
          type="number"
          onChange={handleChange}
          required
        />
        <TextField
          label="Model Year"
          name="modelYear"
          fullWidth
          variant="outlined"
          type="number"
          onChange={handleChange}
          required
        />
        <TextField
          label="Number of Seats"
          name="numberOfSeats"
          fullWidth
          variant="outlined"
          type="number"
          onChange={handleChange}
          required
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          fullWidth
          variant="outlined"
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
          onChange={handleChange}
          required
        >
          {priceCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
        <motion.button
          id="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default SellCarForm;
