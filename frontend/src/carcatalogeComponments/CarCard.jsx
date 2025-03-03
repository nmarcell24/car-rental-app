import React from "react";
import { Button } from "@mui/material";
import { FavoriteOutlined, FlightClass, HeartBrokenOutlined, LocalGasStation, Settings } from "@mui/icons-material";
import { Link } from "react-router";

const CarCard = ({ id, brand, fuelType, transmissionType, numberOfSeats, price, imageUrl }) => {    
  return (
    <div className="w-64 p-4 rounded-2xl shadow-lg bg-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h6 className="text-lg font-semibold">{ brand }</h6>
        <span className="text-gray-400 hover:text-red-500"><FavoriteOutlined /></span>
      </div>
      <div className="flex justify-center mb-4">
        <img
          src={imageUrl}
          alt="Car"
          className="h-32 object-contain"
        />
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <span><LocalGasStation />{ fuelType }</span>
        <span><Settings />{ transmissionType }</span>
        <span><FlightClass />{ numberOfSeats }</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">${ price }</span>
        <Link to={`/rent/${id}`}>
          <Button
            variant="contained"
            color="primary"
            className="!rounded-2xl"
          >
            See more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;