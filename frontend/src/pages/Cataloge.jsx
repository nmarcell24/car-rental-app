import { useEffect, useState } from "react";
import CarCard from "../carcatalogeComponments/CarCard";
import DummyCars from "../data/dummydata.json";
import axios from "axios";

const Cataloge = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    axios.get("/api/cars/autolist").then(({ data }) => setCars(data));
    console.log(cars);
    
  };

  useEffect(() => {
    fetchCars();
    window.scroll(0, 0);
  }, []);

  return (
    <div className="flex items-center justify-center flex-wrap gap-8 p-4 mb-8">
      {cars.map((car, index) => {
        return (
          <div>
            <CarCard {...car} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Cataloge;
