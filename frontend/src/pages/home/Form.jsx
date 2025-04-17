import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";

const Form = () => {
  const [carBrand, setCarBrand] = useState("all");
  const [carType, setCarType] = useState("all");
  const [priceCategory, setPriceCategory] = useState("all");
  const [carBrands, setCarBrands] = useState([]);
  const [carTypes, setCarTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get("/api/car/list");
        const cars = response.data;
        const uniqueBrands = [...new Set(cars.map((car) => car.brand))];
        const uniqueTypes = [...new Set(cars.map((car) => car.carType))];

        setCarBrands(uniqueBrands);
        setCarTypes(uniqueTypes);
      } catch (error) {
        console.error("Error fetching car data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarData();
  }, []);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (carBrand !== "all") queryParams.append("brand", carBrand);
    if (carType !== "all") queryParams.append("carType", carType);
    if (priceCategory !== "all")
      queryParams.append("priceCategory", priceCategory);

    navigate(`/rent?${queryParams.toString()}`);
  };

  return (
    <div className="bg-white sm:w-96 mx-8 flex items-center justify-center flex-col p-8 pt-6 rounded border-8 border-yellow-50">
      <h1 className="text-3xl sn:text-4xl font-medium mb-7">
        It's easy for you to <strong>rent a car</strong>
      </h1>
      <FormControl fullWidth className="flex flex-col gap-6">
        {/* Brand Filter */}
        <FormControl sx={{ marginBottom: 2 }}>
          <InputLabel id="car-brand-select-label">Car Brand</InputLabel>
          <Select
            disabled={loading}
            labelId="car-brand-select-label"
            id="car-brand-select"
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            input={<OutlinedInput label="Car Brand" />}
          >
            <MenuItem value="all">
              <em>All Brands</em>
            </MenuItem>
            {carBrands.map((brand) => (
              <MenuItem key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Car Type Filter */}
        <FormControl sx={{ marginBottom: 2 }}>
          <InputLabel id="car-type-select-label">Car Type</InputLabel>
          <Select
            disabled={loading}
            labelId="car-type-select-label"
            id="car-type-select"
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            input={<OutlinedInput label="Car Type" />}
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
        <FormControl sx={{ marginBottom: 2 }}>
          <InputLabel id="price-select-label">Price Category</InputLabel>
          <Select
            disabled={loading}
            labelId="price-select-label"
            id="price-select"
            value={priceCategory}
            onChange={(e) => setPriceCategory(e.target.value)}
            input={<OutlinedInput label="Price Category" />}
          >
            <MenuItem value="all">
              <em>All Prices</em>
            </MenuItem>
            <MenuItem value="10000">Low (10,000)</MenuItem>
            <MenuItem value="20000">Mid (20,000)</MenuItem>
            <MenuItem value="30000">High (30,000)</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#f1c656" }}
          onClick={handleSearch}
        >
          Reserve Now
        </Button>
      </FormControl>
    </div>
  );
};

export default Form;
