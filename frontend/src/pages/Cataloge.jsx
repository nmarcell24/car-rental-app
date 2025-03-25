import { useEffect, useState } from "react";
import CarCard from "../carcatalogeComponments/CarCard";
import axios from "axios";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  Skeleton,
  useMediaQuery,
} from "@mui/material";

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
      .get("/api/car/list")
      .then(({ data }) => setCars(data))
      .then(() => setIsLoading(false));
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchCars();
    window.scroll(0, 0);
  }, []);

  const [priceCategory, setPriceCategory] = useState([]);

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setPriceCategory(value);
  };

  const prices = ["Low", "Mid", "High"];

  return (
    <div className="p-4 mb-8">
      <div className="flex items-center justify-between w-full pb-8">
        <h1 className="text-2xl font-bold px-5 md:px-12 ">Car cataloge</h1>
        <FormControl className="w-64">
          <InputLabel id="demo-multiple-checkbox-label">Price</InputLabel>
          <Select
            multiple
            value={priceCategory}
            onChange={handleSelectChange}
            input={<OutlinedInput label="Price" />}
            renderValue={(selected) => selected.join(", ")}
          >
            {prices.map((price) => (
              <MenuItem key={price} value={price}>
                <Checkbox checked={priceCategory.includes(price)} />
                <ListItemText primary={price} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-8">
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
              <CarCard {...car} key={car.id} index={index} />
            ))}
        <Pagination
          className="w-full flex justify-center"
          count={cars.length / ITEMS_PER_PAGE}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Cataloge;
