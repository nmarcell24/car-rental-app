import { DirectionsCar, FlightClass, Garage, LocalGasStation, Settings, Speed, Star } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function CarDetail() {
  // const [car, setCar] = useState({});
  // const params = useLocation();
  // console.log(params.id); 

  // useEffect(() => {
  //   const fetchCar = async () => {
  //     const res = await axios.get(`/cars/${params.id}`)
  //     setCar(res.data)
  //   }

  //   fetchCar();
  // }, []);

  const specLogos = [<FlightClass />, <Settings />, <LocalGasStation />, <DirectionsCar />, <Garage />, <Speed />]

  const car = {
    name: "MAZDA CX-5 2021",
    rating: 4.8,
    numOfReviews: 2436,
    price: "$43,000",
    location: "Hoan Kiem district, Ha Noi city",
    specs: [
      { label: "Seats", value: "7 seats" },
      { label: "Car gearbox", value: "Auto" },
      { label: "Fuel", value: "Gas" },
      { label: "Car brand", value: "Kia" },
      { label: "Type car", value: "Carnival" },
      { label: "Mileage", value: "23,000 km" },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur. Maecenas tristique mauris nisl in eget senectus risus.",
    owner: {
      name: "Darrell Steward",
      verified: true,
    },
    images: [
      "/images/car3.png",
      "/images/car_seats.jpg",
      "/images/car_shift.jpg",
      "/images/car_interior.jpg",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img src={car.images[0]} alt="Car" className="w-full rounded-lg" />
          <div className="grid grid-cols-3 gap-2 mt-2">
            {car.images.slice(1).map((img, index) => (
              <img key={index} src={img} alt="Car view" className="rounded-lg h-full object-cover" />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{car.name}</h2>
          <div className="flex items-center mt-2">
            <Star className="text-yellow-500" />
            <span className="ml-1">{car.rating} ({car.numOfReviews} reviews)</span>
          </div>
          <p className="text-gray-700 mt-2">{car.location}</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {car.specs.map((spec, index) => (
              <div key={index} className="border p-2 rounded-lg">
                <span className="font-semibold">{specLogos[index]} {spec.label}:</span> {spec.value}
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-700">{car.description}</p>
          <div className="mt-4 p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Price:</h3>
              <p className="text-2xl font-bold ">{car.price}</p>
            </div>
            <button className="w-full mt-2 bg-[#f1c656] text-white py-2 rounded">Reserv</button>
          </div>
        </div>
      </div>
    </div>
  );
}