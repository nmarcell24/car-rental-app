import { useEffect, useState } from "react";
import CarCard from "../carcatalogeComponments/CarCard";
import DummyCars from "../data/dummydata.json";
import axios from "axios";
import { Pagination, Skeleton, useMediaQuery } from "@mui/material";

const Cataloge = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const paginatedItems = cars.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const fetchCars = async () => {
    axios
      .get("/api/cars/autolist")
      .then(({ data }) => setCars(data))
      .then(() => setIsLoading(false));
    console.log(cars);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchCars();
    window.scroll(0, 0);
  }, []);

  console.log(isLoading);

  return (
    <div className="flex items-center justify-center flex-wrap gap-8 p-4 mb-8">
      {isLoading
        ? [...Array(10)].map((_, i) => (
            <Skeleton
              key={i}
              variant="rounded"
              animation={"wave"}
              className="!rounded-2xl"
              width={"16rem"}
              height={"18.5rem"}
            />
          ))
        : paginatedItems.map((car, index) => (
            <CarCard {...car} index={index} />
          ))}
      <Pagination
        className="w-full flex justify-center"
        count={cars.length / ITEMS_PER_PAGE}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default Cataloge;
