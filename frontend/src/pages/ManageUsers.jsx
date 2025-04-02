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
  TextField,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreIcon from "@mui/icons-material/Restore";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    phone_number: "123-456-7890",
    email: "johndoe@example.com",
    password: "password123",
    address: "Budapest, Andrassy út",
    day_of_birth: "1990-05-10",
    role: "User   ",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    phone_number: "987-654-3210",
    email: "janesmith@example.com",
    password: "password123",
    address: "Nyíregyháza, kemecsei út",
    day_of_birth: "1985-03-15",
    role: "User   ",
  },
  {
    id: 3,
    name: "Emily Davis",
    username: "emilydavis",
    phone_number: "555-123-9876",
    email: "emilydavis@example.com",
    password: "password123",
    address: "Debrecen, Vasgyár utca",
    day_of_birth: "1995-07-20",
    role: "User   ",
  },
  {
    id: 4,
    name: "Michael Johnson",
    username: "michaeljohnson",
    phone_number: "654-321-9876",
    email: "michaeljohnson@example.com",
    password: "password123",
    address: "Nyíregyháza, Rakovszky utca",
    day_of_birth: "1995-07-20",
    role: "User   ",
  },
  {
    id: 5,
    name: "Sarah White",
    username: "sarahwhite",
    phone_number: "321-654-9870",
    email: "sarahwhite@example.com",
    password: "password123",
    address: "Nyíregyháza, Szent István utca",
    day_of_birth: "1998-04-18",
    role: "User   ",
  },
  {
    id: 6,
    name: "Daniel Brown",
    username: "danielbrown",
    phone_number: "111-222-3333",
    email: "danielbrown@example.com",
    password: "password123",
    address: "Debrecen, Szabolcs utca",
    day_of_birth: "1995-07-20",
    role: "Admin",
  },
  {
    id: 7,
    name: "Olivia Taylor",
    username: "oliviataylor",
    phone_number: "444-555-6666",
    email: "oliviataylor@example.com",
    password: "password123",
    address: "Nyíregyháza, Fő utca",
    day_of_birth: "1998-04-18",
    role: "User   ",
  },
  {
    id: 8,
    name: "James Miller",
    username: "jamesmiller",
    phone_number: "777-888-9999",
    email: "jamesmiller@example.com",
    password: "password123",
    address: "Budapest, Kossuth utca",
    day_of_birth: "1993-01-01",
    role: "Admin",
  },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [deletedUsers, setDeletedUsers] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    yearOfBirth: "",
    role: "",
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [viewDeleted, setViewDeleted] = useState(false);

  const handleDeleteClick = (id) => {
    setUserToDelete(id);
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    const userToRemove = users.find((user) => user.id === userToDelete);
    setDeletedUsers([...deletedUsers, userToRemove]); // Move user to deleted users
    setUsers(users.filter((user) => user.id !== userToDelete)); // Remove from active users
    setOpenDialog(false);
    setUserToDelete(null);
  };

  const handleRestoreUser  = (id) => {
    const userToRestore = deletedUsers.find((user) => user.id === id);
    setUsers((prevUsers) => {
      // Insert the user back in the correct position based on ID
      const updatedUsers = [...prevUsers, userToRestore];
      return updatedUsers.sort((a, b) => a.id - b.id); // Sort by ID
    });
    setDeletedUsers(deletedUsers.filter((user) => user.id !== id)); // Remove from deleted users
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
    setUserToDelete(null);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleClearFilters = () => {
    setFilters({ city: "", yearOfBirth: "", role: "" });
  };

  const filteredUsers = viewDeleted ? deletedUsers : users.filter(
    (user) =>
      (filters.city === "" || user.address.split(",")[0].trim().toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.yearOfBirth === "" || user.day_of_birth.startsWith(filters.yearOfBirth)) &&
      (filters.role === "" || user.role.toLowerCase() === filters.role.toLowerCase())
  );

  return (
    <Paper className="p-6 shadow-lg rounded-xl" style={{ overflowX: "auto" }}>
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={4}>
          <TextField name="city" label="City" value={filters.city} onChange={handleFilterChange} fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField name="yearOfBirth" label="Year of Birth" value={filters.yearOfBirth} onChange={handleFilterChange} fullWidth />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select name="role" value={filters.role} onChange={handleFilterChange}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="User   ">User   </MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Button
          variant="outlined"
          style={{
            backgroundColor: '#f1c656', // Clear Filters button color
            color: '#000', // Text color
            marginBottom: "20px"
          }}
          onClick={handleClearFilters}
        >
          Clear Filters
        </Button>
        <Button
          variant="outlined"
          style={{
            backgroundColor: '#f1c656', // White background for View Deleted Users button
            color: '#000', // Orange text color
            marginLeft: "10px",
            marginBottom: "20px"
          }}
          onClick={() => setViewDeleted(!viewDeleted)} // Toggle view
        >
          {viewDeleted ? "View Active Users" : "View Deleted Users"}
        </Button>
      </Grid>
      <hr style={{ borderTop: "2px solid #ccc", margin: "20px 0" }} />
      <TableContainer component={Paper} style={{ maxHeight: "400px", overflowY: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Username</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Address</strong></TableCell>
              <TableCell><strong>Date of Birth</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.phone_number}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.day_of_birth}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {viewDeleted ? (
                    <IconButton onClick={() => handleRestoreUser (user.id)} color="primary">
                      <RestoreIcon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={() => handleDeleteClick(user.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleDeleteCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>Are you sure you want to delete this user?</DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ManageUsers;