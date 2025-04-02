import React, { useEffect, useState } from "react";
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
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const ManageCars = () => {
  const [cars, setCars] = useState([]);
  const [deletedCars, setDeletedCars] = useState([]); // Törölt autók tárolása
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    brand: "",
    carType: "",
    numberOfSeats: "",
    fuelType: "",
    transmissionType: "",
    priceCategoryId: "",
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [carToDelete, setCarToDelete] = useState(null);

  const fetchCars = async () => {
    try {
      const response = await axios.get("/api/car/list");
      setCars(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching cars:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleDeleteClick = (id) => {
    setCarToDelete(id);
    setOpenDialog(true);

    axios.delete(`/api/car/${id}`).then(({data}) => {
      console.log("Car deleted:", data);
    }).catch((err) => {
      console.error("Error deleting car:", err);
    })
  };

  const handleDeleteConfirm = () => {
    // Az autó "törlése" a felületen
    const carToRemove = cars.find((car) => car.id === carToDelete);
    setDeletedCars([...deletedCars, carToRemove]); // Hozzáadjuk a törölt autókhoz
    setCars(cars.filter((car) => car.id !== carToDelete)); // Eltávolítjuk a listából
    setOpenDialog(false);
    setCarToDelete(null);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
    setCarToDelete(null);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleClearFilters = () => {
    setFilters({
      brand: "",
      carType: "",
      numberOfSeats: "",
      fuelType: "",
      transmissionType: "",
      priceCategoryId: "",
    });
  };

  const uniqueBrands = [...new Set(cars.map(car => car.brand))];
  const uniqueCarTypes = [...new Set(cars.map(car => car.carType))];
  const uniqueFuelTypes = [...new Set(cars.map(car => car.fuelType))];
  const uniqueSeats = [...new Set(cars.map(car => car.numberOfSeats))].sort((a, b) => a - b);

  const filteredCars = cars.filter((car) =>
    (filters.brand === "" || car.brand === filters.brand) &&
    (filters.carType === "" || car.carType === filters.carType) &&
    (filters.numberOfSeats === "" || car.numberOfSeats === Number(filters.numberOfSeats)) &&
    (filters.fuelType === "" || car.fuelType === filters.fuelType) &&
    (filters.transmissionType === "" || car.transmissionType === filters.transmissionType) &&
    (filters.priceCategoryId === "" || 
      (filters.priceCategoryId === "10000" && car.priceCategoryId === 10000) || // Low
      (filters.priceCategoryId === "20000" && car.priceCategoryId === 20000) || // Mid
      (filters.priceCategoryId === "30000" && car.priceCategoryId === 30000)) // High
  );

  return (
    <Paper className="p-6 shadow-lg rounded-xl" style={{ overflowX: "auto" }}>
      {/* Filter Section */}
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            name="brand"
            value={filters.brand}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Brands</MenuItem>
            {uniqueBrands.map(brand => (
              <MenuItem key={brand} value={brand}>{brand}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            name="carType"
            value={filters.carType}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Car Types</MenuItem>
            {uniqueCarTypes.map(type => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            name="numberOfSeats"
            value={filters.numberOfSeats}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Seats</MenuItem>
            {uniqueSeats.map(seat => (
              <MenuItem key={seat} value={seat}>{seat}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            name="fuelType"
            value={filters.fuelType}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Fuel Types</MenuItem>
            {uniqueFuelTypes.map(fuel => (
              <MenuItem key={fuel} value={fuel}>{fuel}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            name="transmissionType"
            value={filters.transmissionType}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Transmissions</MenuItem>
            <MenuItem value="Automatic">Automatic</MenuItem>
            <MenuItem value="Manual">Manual</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Select
            name="priceCategoryId"
            value={filters.priceCategoryId}
            onChange={handleFilterChange}
            fullWidth
            displayEmpty
          >
            <MenuItem value="">All Price Categories</MenuItem>
            <MenuItem value="10000">Low (10,000)</MenuItem>
            <MenuItem value="20000">Mid (20,000)</MenuItem>
            <MenuItem value="30000">High (30,000)</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end">
        <Button
          variant="outlined"
          style={{
            backgroundColor: '#f1c656',
            color: '#000',
            marginBottom: "20px"
          }}
          onClick={handleClearFilters}
        >
          Clear Filters
        </Button>
      </Grid>

      <hr style={{ borderTop: "2px solid #ccc", margin: "20px 0" }} />

      <TableContainer component={Paper} style={{ maxHeight: "400px", overflowY: "auto" }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Brand</strong></TableCell>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Seats</strong></TableCell>
              <TableCell><strong>Fuel</strong></TableCell>
              <TableCell><strong>Transmission</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Image</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={10} style={{ textAlign: 'center' }}>
                  Loading cars...
                </TableCell>
              </TableRow>
            ) : filteredCars.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} style={{ textAlign: 'center' }}>
                  No cars found matching your criteria
                </TableCell>
              </TableRow>
            ) : (
              filteredCars.map((car) => (
                <TableRow key={car.id} hover>
                  <TableCell>{car.id}</TableCell>
                  <TableCell>{car.brand}</TableCell>
                  <TableCell>{car.carType}</TableCell>
                  <TableCell>{car.numberOfSeats}</TableCell>
                  <TableCell>{car.fuelType}</TableCell>
                  <TableCell>{car.transmissionType}</TableCell>
                  <TableCell>{car.priceCategoryId}</TableCell>
                  <TableCell>
                    {car.imageUrl && (
                      <img
                        src={car.imageUrl}
                        alt={car.brand}
                        style={{ width: "50px", height: "auto" }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "./images/placeholder.svg";
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDeleteClick(car.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

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