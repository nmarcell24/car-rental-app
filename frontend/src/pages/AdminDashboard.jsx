import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Container,
  Paper,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PeopleIcon from "@mui/icons-material/People";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ManageCars from "./ManageCars";
import ManageUsers from "./ManageUsers";
import { useUserContext } from "../hooks/useUserContext";
import axios from "axios";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState(null);
  const { setCurrentUser } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = "";
    setCurrentUser(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f1c656] p-6">
      {!activeSection ? (
        <Card className="w-full max-w-2xl p-10 shadow-2xl bg-white rounded-2xl border border-gray-300">
          <CardContent>
            <Box className="flex flex-col items-center mb-8">
              <DashboardIcon className="text-black" style={{ fontSize: 60 }} />
              <Typography
                variant="h3"
                className="text-center text-black font-bold mt-4"
              >
                Admin Dashboard
              </Typography>
            </Box>

            <Divider className="my-8" />

            <Box className="space-y-8 flex flex-col items-center">
              <Button
                fullWidth
                variant="contained"
                startIcon={<DirectionsCarIcon />}
                style={{
                  backgroundColor: "#FFD700",
                  color: "black",
                  fontSize: "1.3rem",
                  padding: "15px 0",
                  marginBottom: "20px",
                }}
                onClick={() => setActiveSection("cars")}
              >
                Manage Cars
              </Button>

              <Button
                fullWidth
                variant="contained"
                startIcon={<PeopleIcon />}
                style={{
                  backgroundColor: "#FFB700",
                  color: "black",
                  fontSize: "1.3rem",
                  padding: "15px 0",
                  marginBottom: "20px",
                }}
                onClick={() => setActiveSection("users")}
              >
                Manage Users
              </Button>

              <Button
                onClick={handleLogout}
                fullWidth
                variant="contained"
                startIcon={<ExitToAppIcon />}
                style={{
                  backgroundColor: "#FF4500",
                  color: "black",
                  fontSize: "1.3rem",
                  padding: "15px 0",
                }}
              >
                Logout
              </Button>
            </Box>
          </CardContent>
        </Card>
      ) : (
        <Container>
          <Paper className="p-6 shadow-lg rounded-xl">
            {activeSection === "cars" && (
              <>
                <Typography variant="h4" align="center" className="mb-4">
                  Car Management
                </Typography>
                <ManageCars />
              </>
            )}

            {activeSection === "users" && (
              <>
                <Typography variant="h4" align="center" className="mb-4">
                  User Management
                </Typography>
                <ManageUsers />
              </>
            )}

            <Button
              variant="contained"
              onClick={() => setActiveSection(null)}
              style={{
                marginTop: "20px",
                backgroundColor: "#f1c656",
                color: "black",
              }}
            >
              Back to Dashboard
            </Button>
          </Paper>
        </Container>
      )}
    </div>
  );
};

export default AdminDashboard;
