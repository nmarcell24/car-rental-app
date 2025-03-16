import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const CarSellingPage = () => {
  const [car, setCar] = useState({
    marka: "",
    fuelType: "",
    transmissionType: "",
    numberOfSeats: "",
    price: "",
    imageUrl: "",
  });

  //react-stepper

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Car details submitted:", car);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">Sell Your Car</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          fullWidth
          label="Car Brand"
          name="marka"
          value={car.marka}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Fuel Type"
          name="fuelType"
          value={car.fuelType}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Transmission Type"
          name="transmissionType"
          value={car.transmissionType}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          type="number"
          label="Number of Seats"
          name="numberOfSeats"
          value={car.numberOfSeats}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          type="number"
          label="Price ($)"
          name="price"
          value={car.price}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Image URL"
          name="imageUrl"
          value={car.imageUrl}
          onChange={handleChange}
          variant="outlined"
        />
        {car.imageUrl && (
          <img
            src={car.imageUrl}
            alt="Car Preview"
            className="w-full h-40 object-cover rounded mt-2"
          />
        )}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CarSellingPage;
