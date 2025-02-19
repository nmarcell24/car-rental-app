import React from "react";
import { Button } from "@mui/material";
import { FavoriteOutlined, FlightClass, HeartBrokenOutlined, LocalGasStation, Settings } from "@mui/icons-material";
import { Link } from "react-router";

const CarCard = ({ name, fuel_type, transmission, seats, price, image }) => {    
  return (
    <div className="w-64 p-4 rounded-2xl shadow-lg bg-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h6 className="text-lg font-semibold">{ name }</h6>
        <span className="text-gray-400 hover:text-red-500"><FavoriteOutlined /></span>
      </div>
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt="Car"
          className="h-32 object-contain"
        />
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <span><LocalGasStation />{ fuel_type }</span>
        <span><Settings />{ transmission }</span>
        <span><FlightClass />{ seats }</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">${ price }</span>
        {/* <Link to={`/cataloge/${id}`}> */}
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            See more
          </Button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default CarCard;