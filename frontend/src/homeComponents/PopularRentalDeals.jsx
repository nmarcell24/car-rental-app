import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularRentalDeals = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get(`/api/car/list`);
      setCars(res.data);
      setCars((prev) => prev.slice(0, 4));
      setIsLoading(false)
    };

    fetchCars()
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="bg-yellow-500 text-white rounded-md font-semibold mb-3 uppercase inline-block px-8 py-3">
          Popular Rental Deals
        </h2>
        <h3 className="text-4xl font-bold mb-10 text-gray-800">
          Most Popular Cars Rental Deals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {isLoading
            ? [...Array(4)].map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rounded"
                  animation={"wave"}
                  className="!rounded-2xl"
                  width={"21rem"}
                  height={"27rem"}
                />
              ))
            : cars.map((car, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 text-start hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={car.imageUrl}
                  alt={car.name}
                  className="h-52 w-full object-fit rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  {car.brand} {car.carType}
                </h4>
                <p className="text-gray-600 text-sm font-medium">
                  ⭐ <span className="text-yellow-500">4.5</span> ( 30 reviews)
                </p>
                <ul className="text-gray-600 text-sm my-2 space-y-1 grid grid-cols-2">
                  <li>👥 {car.numberOfSeats} Passengers</li>
                  <li>⚙️ {car.transmissionType}</li>
                  <li>⛽ {car.fuelType}</li>
                  <li>🔩 {car.driveTrain}</li>
                </ul>
                <hr className="m-4" />
                <p className="text-lg font-bold text-gray-800 mb-4 flex items-center justify-between">
                  Price:{" "}
                  <span>
                    ${car.priceCategoryId}{" "}
                    <span className="text-gray-600">/day</span>
                  </span>
                </p>
                <Link
                  to={`/rent/${car.id}`}
                  className="bg-yellow-500 w-full block text-center text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Rent Now →
                </Link>
              </div>
            ))}
        </div>
        <div className="mt-10">
          <Link
            to={"/rent"}
            className="bg-gray-100 px-6 py-3 rounded-lg shadow-md text-gray-700 font-medium hover:bg-gray-200 transition"
          >
            Show all vehicles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularRentalDeals;
