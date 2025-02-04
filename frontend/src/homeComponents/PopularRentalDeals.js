import React from "react";
import { Link } from "react-router";

const cars = [
  {
    name: "Jaguar XE L P250",
    rating: 4.8,
    reviews: 2436,
    passengers: 4,
    transmission: "Auto",
    airConditioning: true,
    doors: 4,
    price: 1800,
    image: "./images/car21.png", // Replace with actual image
  },
  {
    name: "Audi R8",
    rating: 4.6,
    reviews: 1936,
    passengers: 2,
    transmission: "Auto",
    airConditioning: true,
    doors: 2,
    price: 2100,
    image: "./images/car20.png", // Replace with actual image
  },
  {
    name: "BMW M3",
    rating: 4.5,
    reviews: 2036,
    passengers: 4,
    transmission: "Auto",
    airConditioning: true,
    doors: 4,
    price: 1600,
    image: "./images/car19.png", // Replace with actual image
  },
  {
    name: "Lamborghini Huracan",
    rating: 4.3,
    reviews: 2236,
    passengers: 2,
    transmission: "Auto",
    airConditioning: true,
    doors: 2,
    price: 2300,
    image: "./images/car11.png", // Replace with actual image
  },
];

const PopularRentalDeals = () => {
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
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-start hover:scale-105 transition-transform duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-38 object-fit rounded-md mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                {car.name}
              </h4>
              <p className="text-gray-600 text-sm font-medium">
                ⭐ <span className="text-yellow-500">{car.rating}</span> (
                {car.reviews} reviews)
              </p>
              <ul className="text-gray-600 text-sm my-2 space-y-1 grid grid-cols-2">
                <li>👥 {car.passengers} Passengers</li>
                <li>⚙️ {car.transmission}</li>
                <li>❄️ Air Conditioning</li>
                <li>🚪 {car.doors} Doors</li>
              </ul>
              <hr className="m-4" />
              <p className="text-lg font-bold text-gray-800 mb-4 flex items-center justify-between">
                Price: <span>${car.price} <span className="text-gray-600">/day</span></span>
              </p>
              <button className="bg-yellow-500 w-full text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
                Rent Now →
              </button>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to={"/cataloge"} className="bg-gray-100 px-6 py-3 rounded-lg shadow-md text-gray-700 font-medium hover:bg-gray-200 transition">
            Show all vehicles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularRentalDeals;
