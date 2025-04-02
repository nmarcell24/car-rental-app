import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Select,
  MenuItem,
  TextField,
  Grid,
  Chip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreIcon from "@mui/icons-material/Restore";

const initialCars = [
  {
    id: 1,
    brand: "Toyota",
    car_type: "Sedan",
    horse_power: 132,
    model_year: 2020,
    number_of_seats: 5,
    fuel_type: "Petrol",
    transmission_type: "Automatic",
    drive_train: "FWD",
    image_url: "/images/car34_cabrio.png",
    price_category_id: "high",
    isBooked: false,
  },
  {
    id: 2,
    brand: "Ford",
    car_type: "SUV",
    horse_power: 250,
    model_year: 2021,
    number_of_seats: 7,
    fuel_type: "Diesel",
    transmission_type: "Manual",
    drive_train: "AWD",
    image_url: "/images/car15.png",
    price_category_id: "high",
    isBooked: true,
  },
  {
    id: 3,
    brand: "Audi",
    car_type: "SUV",
    horse_power: 280,
    model_year: 2022,
    number_of_seats: 5,
    fuel_type: "Hybrid",
    transmission_type: "Automatic",
    drive_train: "AWD",
    image_url: "/images/car11.png",
    price_category_id: "low",
    isBooked: false,
  },
  {
    id: 4,
    brand: "BMW",
    car_type: "Coupe",
    horse_power: 320,
    model_year: 2023,
    number_of_seats: 4,
    fuel_type: "Petrol",
    transmission_type: "Automatic",
    drive_train: "RWD",
    image_url: "/images/car17.png",
    price_category_id: "high",
    isBooked: false,
  },
  {
    id: 5,
    brand: "Mercedes",
    car_type: "Sedan",
    horse_power: 280,
    model_year: 2022,
    number_of_seats: 5,
    fuel_type: "Diesel",
    transmission_type: "Automatic",
    drive_train: "AWD",
    image_url: "/images/car18.png",
    price_category_id: "high",
    isBooked: true,
  },
  {
    id: 6,
    brand: "Honda",
    car_type: "SUV",
    horse_power: 220,
    model_year: 2020,
    number_of_seats: 5,
    fuel_type: "Hybrid",
    transmission_type: "Automatic",
    drive_train: "AWD",
    image_url: "/images/car19.png",
    price_category_id: "medium",
    isBooked: false,
  },
  {
    id: 7,
    brand: "Nissan",
    car_type: "Hatchback",
    horse_power: 150,
    model_year: 2019,
    number_of_seats: 5,
    fuel_type: "Petrol",
    transmission_type: "Manual",
    drive_train: "FWD",
    image_url: "/images/car20.png",
    price_category_id: "low",
    isBooked: true,
  },
  {
    id: 8,
    brand: "Volkswagen",
    car_type: "SUV",
    horse_power: 190,
    model_year: 2022,
    number_of_seats: 5,
    fuel_type: "Diesel",
    transmission_type: "Automatic",
    drive_train: "AWD",
    image_url: "/images/car21.png",
    price_category_id: "medium",
    isBooked: false,
  },
  {
    id: 9,
    brand: "Tesla",
    car_type: "Sedan",
    horse_power: 450,
    model_year: 2024,
    number_of_seats: 5,
    fuel_type: "Electric",
    transmission_type: "Automatic",
    drive_train: "AWD",
    image_url: "/images/car22.png",
    price_category_id: "high",
    isBooked: false,
  },
];

const ManageCars = () => {
  const [cars, setCars] = useState(initialCars);
  const [deletedCars, setDeletedCars] = useState([]); // State for deleted cars
  const [filters, setFilters] = useState({
    brand: "",
    car_type: "",
    drive_train: "",
    transmission_type: "",
    fuel_type: "",
    seats: "",
    minHorsePower: "",
    maxHorsePower: "",
    minYear: "",
    maxYear: "",
    price_category_id: "",
    isBooked: "",
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);
  const [viewDeleted, setViewDeleted] = useState(false); // State to toggle view

  const handleDeleteClick = (id) => {
    setCarToDelete(id);
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    const carToRemove = cars.find((car) => car.id === carToDelete);
    setDeletedCars([...deletedCars, carToRemove]); // Add to deleted cars
    setCars(cars.filter((car) => car.id !== carToDelete));
    setOpenDialog(false);
    setCarToDelete(null);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
    setCarToDelete(null);
  };

  const handleRestoreCar = (id) => {
    const carToRestore = deletedCars.find((car) => car.id === id);
    setCars((prevCars) => {
      const updatedCars = [...prevCars, carToRestore]; // Restore the car to active list
      return updatedCars.sort((a, b) => a.id - b.id); // Sort by ID
    });
    setDeletedCars(deletedCars.filter((car) => car.id !== id)); // Remove from deleted cars
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleClearFilters = () => {
    setFilters({
      brand: "",
      car_type: "",
      drive_train: "",
      transmission_type: "",
      fuel_type: "",
      seats: "",
      minHorsePower: "",
      maxHorsePower: "",
      minYear: "",
      maxYear: "",
      price_category_id: "",
      isBooked: "",
    });
  };

  const filteredCars = viewDeleted ? deletedCars : cars.filter((car) =>
    (filters.brand === "" || car.brand === filters.brand) &&
    (filters.car_type === "" || car.car_type === filters.car_type) &&
    (filters.drive_train === "" || car.drive_train === filters.drive_train) &&
    (filters.transmission_type === "" || car.transmission_type === filters.transmission_type) &&
    (filters.fuel_type === "" || car.fuel_type === filters.fuel_type) &&
    (filters.seats === "" || car.number_of_seats === Number(filters.seats)) &&
    (filters.minHorsePower === "" || car.horse_power >= Number(filters.minHorsePower)) &&
    (filters.maxHorsePower === "" || car.horse_power <= Number(filters.maxHorsePower)) &&
    (filters.minYear === "" || car.model_year >= Number(filters.minYear)) &&
    (filters.maxYear === "" || car.model_year <= Number(filters.maxYear)) &&
    (filters.price_category_id === "" || car.price_category_id === filters.price_category_id) &&
    (filters.isBooked === "" || car.isBooked.toString() === filters.isBooked)
  );

  return (
    <Paper className="p-6 shadow-lg rounded-xl" style={{ overflowX: "auto" }}>
      {/* Filter Section */}
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={2}>
          <Select
            name="brand"
            value={filters.brand}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Brands</MenuItem>
            <MenuItem value="Toyota">Toyota</MenuItem>
            <MenuItem value="Ford">Ford</MenuItem>
            <MenuItem value="Audi">Audi</MenuItem>
            <MenuItem value="BMW">BMW</MenuItem>
            <MenuItem value="Mercedes">Mercedes</MenuItem>
            <MenuItem value="Honda">Honda</MenuItem>
            <MenuItem value="Nissan">Nissan</MenuItem>
            <MenuItem value="Volkswagen">Volkswagen</MenuItem>
            <MenuItem value="Tesla">Tesla</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <Select
            name="car_type"
            value={filters.car_type}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Car Types</MenuItem>
            <MenuItem value="Sedan">Sedan</MenuItem>
            <MenuItem value="SUV">SUV</MenuItem>
            <MenuItem value="Coupe">Coupe</MenuItem>
            <MenuItem value="Hatchback">Hatchback</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <Select
            name="drive_train"
            value={filters.drive_train}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Drive Trains</MenuItem>
            <MenuItem value="FWD">FWD</MenuItem>
            <MenuItem value="AWD">AWD</MenuItem>
            <MenuItem value="RWD">RWD</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <Select
            name="transmission_type"
            value={filters.transmission_type}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Transmissions</MenuItem>
            <MenuItem value="Automatic">Automatic</MenuItem>
            <MenuItem value="Manual">Manual</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <TextField
            name="minHorsePower"
            label="Min HP"
            type="number"
            value={filters.minHorsePower}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            name="maxHorsePower"
            label="Max HP"
            type="number"
            value={filters.maxHorsePower}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={2}>
          <TextField
            name="minYear"
            label="Min Year"
            type="number"
            value={filters.minYear}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            name="maxYear"
            label="Max Year"
            type="number"
            value={filters.maxYear}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            name="seats"
            label="Seats"
            type="number"
            value={filters.seats}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Select
            name="fuel_type"
            value={filters.fuel_type}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Fuel Types</MenuItem>
            <MenuItem value="Petrol">Petrol</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Hybrid">Hybrid</MenuItem>
            <MenuItem value="Electric">Electric</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <Select
            name="price_category_id"
            value={filters.price_category_id}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Prices</MenuItem>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={2}>
          <Select
            name="isBooked"
            value={filters.isBooked}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="true">Booked</MenuItem>
            <MenuItem value="false">Available</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Clear Filters Button */}
      <Grid container justifyContent="flex-end">
      <Button
        variant="outlined"
        style={{
          backgroundColor: '#f1c656',
          color: '#000', // Set text color to black for better contrast
          marginBottom: "20px"
        }}
        onClick={handleClearFilters}
      >
      Clear Filters
      </Button>
      <Button
        variant="outlined"
        style={{
          backgroundColor: '#f1c656', // White background
          color: '#000', // Orange text color
          marginLeft: "10px",
          marginBottom: "20px"
        }}
        onClick={() => setViewDeleted(!viewDeleted)} // Toggle view
      >
      {viewDeleted ? "View Active Cars" : "View Deleted Cars"}
      </Button>
      </Grid>

      {/* Separator */}
      <hr style={{ borderTop: "2px solid #ccc", margin: "20px 0" }} />

      {/* Table Section */}
      <TableContainer component={Paper} style={{ maxHeight: "400px", overflowY: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Brand</strong></TableCell>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>HP</strong></TableCell>
              <TableCell><strong>Year</strong></TableCell>
              <TableCell><strong>Seats</strong></TableCell>
              <TableCell><strong>Fuel</strong></TableCell>
              <TableCell><strong>Transmission</strong></TableCell>
              <TableCell><strong>Drive Train</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Booked</strong></TableCell>
              <TableCell><strong>Image</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCars.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.id}</TableCell>
                <TableCell>{car.brand}</TableCell>
                <TableCell>{car.car_type}</TableCell>
                <TableCell>{car.horse_power}</TableCell>
                <TableCell>{car.model_year}</TableCell>
                <TableCell>{car.number_of_seats}</TableCell>
                <TableCell>{car.fuel_type}</TableCell>
                <TableCell>{car.transmission_type}</TableCell>
                <TableCell>{car.drive_train}</TableCell>
                <TableCell>{car.price_category_id}</TableCell>
                <TableCell>
                  <Chip
                    label={car.isBooked ? "Booked" : "Available"}
                    color={car.isBooked ? "error" : "success"}
                    size="small"
                    style={{
                      backgroundColor: car.isBooked ? "#f44336" : "#4caf50",
                      color: "#fff",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <img
                    src={car.image_url}
                    alt={car.brand}
                    style={{ width: "50px", height: "auto" }}
                  />
                </TableCell>
                <TableCell>
                  {!viewDeleted ? (
                    <IconButton onClick={() => handleDeleteClick(car.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => handleRestoreCar(car.id)} color="primary">
                      <RestoreIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleDeleteCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this car?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ManageCars;