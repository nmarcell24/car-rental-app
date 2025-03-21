import {
  DirectionsCar,
  FlightClass,
  Garage,
  LocalGasStation,
  LocationCity,
  Settings,
  Speed,
  Star,
} from "@mui/icons-material";
import { Dialog } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ReservSteps } from "../components/ReservSteps";

export default function CarDetail() {
  const [car, setCar] = useState({});
  const [open, setOpen] = useState(false);
  const params = useParams();
  let HungarianForint = new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumSignificantDigits: "1"
});

  useEffect(() => {
    const fetchCar = async () => {
      const res = await axios.get(`/api/car/${params.id}`);
      setCar(res.data);
    };

    fetchCar();
  }, []);

  const specLogos = [
    <FlightClass />,
    <Settings />,
    <LocalGasStation />,
    <DirectionsCar />,
    <Garage />,
    <Speed />,
  ];

  const images = [
    "/images/car_seats.jpg",
    "/images/car_shift.jpg",
    "/images/car_interior.jpg",
  ];

  const specs = [
    { label: "Seats", value: car.numberOfSeats },
    { label: "Car gearbox", value: car.transmissionType },
    { label: "Fuel", value: car.fuelType },
    { label: "Car brand", value: car.brand },
    { label: "Type car", value: car.carType },
    { label: "Drive train", value: car.driveTrain },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <img
            src={car.imageUrl && car.imageUrl.slice(1)}
            alt="Car"
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-3 gap-2 mt-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Car view"
                className="rounded-lg h-full object-cover"
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">
            {car.brand} {car.modelYear}
          </h2>
          <div className="flex items-center mt-2">
            <Star className="text-yellow-500" />
            <span className="ml-1">4.24 (124 reviews)</span>
          </div>
          <p className="text-gray-700 mt-2">
            <LocationCity /> Hungary
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {specs.map((spec, index) => (
              <div key={index} className="border p-2 rounded-lg">
                <span className="font-semibold">
                  {specLogos[index]} {spec.label}:
                </span>{" "}
                {spec.value}
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            veniam tempore iusto voluptatem, voluptatum minima perspiciatis
            ipsam pariatur. Quibusdam nobis repudiandae eum distinctio esse eos
            corrupti quasi labore rem numquam!
          </p>
          <div className="mt-4 p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Price:</h3>
              <p className="text-2xl font-bold ">{ HungarianForint.format(car.priceCategoryId) } / day</p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="w-full mt-2 bg-[#f1c656] text-white py-2 rounded"
            >
              Reserv
            </button>
          </div>
        </div>
      </div>
      {open && (
        <Dialog
          onClose={() => setOpen(false)}
          open={open}
          maxWidth={"md"}
          fullWidth
        >
          <ReservSteps car={car} specLogos={specLogos} specs={specs} setOpen={setOpen} />
        </Dialog>
      )}
    </div>
  );
}
