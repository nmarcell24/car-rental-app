import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CarCard from "../components/CarCard";
import axios from "axios";
import {
  Select,
  MenuItem,
  Pagination,
  FormControl,
  InputLabel,
  OutlinedInput,
  Skeleton,
} from "@mui/material";

const Cataloge = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [brands, setBrands] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [filters, setFilters] = useState({
    brand: "all",
    carType: "all",
    priceCategoryId: "all",
  });

  const location = useLocation();

  const fetchCars = async () => {
    try {
      const response = await axios.get("/api/car/list");
      setCars(response.data);
      const uniqueBrands = [...new Set(response.data.map((car) => car.brand))];
      const uniqueCarTypes = [
        ...new Set(response.data.map((car) => car.carType)),
      ];
      setIsLoading(false);
      setBrands(uniqueBrands);
      setCarTypes(uniqueCarTypes);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  const handleFilterChange = (field) => (event) => {
    const value = event.target.value;
    setFilters((prev) => ({ ...prev, [field]: value }));
    setPage(1);
  };

  const handleChange = (_, value) => {
    setPage(value);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const priceFromQuery = queryParams.get("priceCategory");
    const brandFromQuery = queryParams.get("brand");
    const carTypeFromQuery = queryParams.get("carType");

    setFilters({
      brand: brandFromQuery || "all",
      carType: carTypeFromQuery || "all",
      priceCategoryId: priceFromQuery || "all",
    });
  }, [location.search]);

  useEffect(() => {
    if (!cars.length) return;

    let filtered = [...cars];

    if (filters.brand !== "all") {
      filtered = filtered.filter((car) => car.brand === filters.brand);
    }

    if (filters.carType !== "all") {
      filtered = filtered.filter((car) => car.carType === filters.carType);
    }

    if (filters.priceCategoryId !== "all") {
      filtered = filtered.filter(
        (car) => car.priceCategoryId === Number(filters.priceCategoryId)
      );
    }

    setFilteredCars(filtered);
  }, [cars, filters]);

  const paginatedItems = filteredCars.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  useEffect(() => {
    fetchCars();
    window.scroll(0, 0);
  }, []);

  return (
    <div className="p-4 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-8 px-5 md:px-12">
        <h1 className="text-2xl font-bold">Car Catalog</h1>
        <div className="flex flex-wrap gap-4 items-center justify-start md:justify-end">
          {/* Brand Filter */}
          <FormControl className="min-w-[160px]">
            <InputLabel id="brand-select-label">Brand</InputLabel>
            <Select
              labelId="brand-select-label"
              value={filters.brand}
              onChange={handleFilterChange("brand")}
              input={<OutlinedInput label="Brand" />}
            >
              <MenuItem value="all">
                <em>All Brands</em>
              </MenuItem>
              {brands.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Car Type Filter */}
          <FormControl className="min-w-[160px]">
            <InputLabel id="car-type-select-label">Type</InputLabel>
            <Select
              labelId="car-type-select-label"
              value={filters.carType}
              onChange={handleFilterChange("carType")}
              input={<OutlinedInput label="Type" />}
            >
              <MenuItem value="all">
                <em>All Types</em>
              </MenuItem>
              {carTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Price Category Filter */}
          <FormControl className="min-w-[160px]">
            <InputLabel id="price-select-label">Price</InputLabel>
            <Select
              labelId="price-select-label"
              value={filters.priceCategoryId}
              onChange={handleFilterChange("priceCategoryId")}
              input={<OutlinedInput label="Price" />}
            >
              <MenuItem value="all">
                <em>All Prices</em>
              </MenuItem>
              <MenuItem value="10000">Low (10,000)</MenuItem>
              <MenuItem value="20000">Mid (20,000)</MenuItem>
              <MenuItem value="30000">High (30,000)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      {/* CAR LIST */}
      <div className="flex items-center justify-center flex-wrap gap-8">
        {isLoading ? (
          [...Array(10)].map((_, i) => (
            <Skeleton
              key={i}
              variant="rounded"
              animation={"wave"}
              className="!rounded-2xl"
              width={"16rem"}
              height={"18.5rem"}
            />
          ))
        ) : filteredCars.length === 0 ? (
          <div className="w-full min-h-52 flex items-center justify-center text-xl font-bold">
            No cars found with the selected filters.
          </div>
        ) : (
          paginatedItems.map((car, index) => (
            <CarCard {...car} key={car.id} index={index} />
          ))
        )}

        <div className="w-full flex items-center justify-center gap-10">
          <Pagination
            count={Math.ceil(filteredCars.length / itemsPerPage)}
            page={page}
            onChange={handleChange}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Items per page" }}
            >
              <MenuItem value={6}>6 items</MenuItem>
              <MenuItem value={10}>10 items</MenuItem>
              <MenuItem value={12}>12 items</MenuItem>
              <MenuItem value={16}>16 items</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Cataloge;
