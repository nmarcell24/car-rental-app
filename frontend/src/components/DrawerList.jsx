import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AttachMoney, CarRental, Home, Menu } from "@mui/icons-material";
import { Link, useLocation } from "react-router";
import { useUserContext } from "../hooks/useUserContext";
import { userContext } from "../contexts/userContextProvider";
import { AnimatePresence, motion } from "framer-motion";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";

export default function DrawerList({
  setOpenDialogSignIn,
  setOpenDialogSignUp,
}) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const { currentUser, setCurrentUser } = useUserContext(userContext);
  const navigate = useNavigate();

  if (alert) {
    setTimeout(() => {
      setAlert(false);
    }, 4000);
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerListt = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <Link to={"/"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={"/rent"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CarRental />
              </ListItemIcon>
              <ListItemText primary={"Rent a car"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <button
          onClick={() => {
            localStorage.getItem("token") === null
              ? setAlert(true)
              : navigate("/publish");
          }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AttachMoney />
              </ListItemIcon>
              <ListItemText primary={"Publish a car"} />
            </ListItemButton>
          </ListItem>
        </button>
      </List>
    </Box>
  );

  return (
    <div>
      <div className="md:hidden">
        <Button onClick={toggleDrawer(true)}>
          <Menu className="text-black" />
        </Button>
        <Drawer
          className="md:hidden relative"
          open={open}
          anchor={"right"}
          onClose={toggleDrawer(false)}
        >
          {DrawerListt}
          {!currentUser ? (
            <div className="flex w-full justify-evenly absolute bottom-0">
              <Button
                variant="contained"
                onClick={() => {
                  setOpenDialogSignIn(true);
                  setOpen(false);
                }}
                sx={{
                  color: "white",
                  backgroundColor: "#f1c656",
                }}
              >
                Sign in
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setOpenDialogSignUp(true);
                  setOpen(false);
                }}
                sx={{
                  color: "#f1c656",
                  borderColor: "#f1c656",
                }}
              >
                Register
              </Button>
            </div>
          ) : (
            <div className="w-full text-center absolute bottom-0 flex flex-col justify-center gap-3">
              <Link to={"/user"} className="text-lg font-semibold flex items-center justify-center md:mr-6">
                {currentUser.email}
              </Link>
              <Button
                onClick={() => {
                  setCurrentUser(null);
                  localStorage.removeItem("token");
                  delete axios.defaults.headers.common['Authorization'];
                  navigate("/");
                }}
                variant="contained"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Log out
              </Button>
            </div>
          )}
        </Drawer>
      </div>
      <ul className="hidden md:flex gap-4">
        <Link
          to={"/"}
          className={
            pathname === "/rent"
              ? "flex items-center hover:border-b hover:border-black hover:cursor-pointer"
              : "flex items-center hover:border-b hover:text-white hover:cursor-pointer"
          }
        >
          Home
        </Link>
        <Link
          to={"/rent"}
          className={
            pathname === "/rent"
              ? "flex items-center hover:border-b hover:border-black hover:cursor-pointer"
              : "flex items-center hover:border-b hover:text-white hover:cursor-pointer"
          }
        >
          Rent
        </Link>
        <button
          onClick={() => {
            localStorage.getItem("token") === null
              ? setAlert(true)
              : navigate("/publish");
          }}
          className={
            pathname === "/rent"
              ? "flex items-center hover:border-b hover:border-black hover:cursor-pointer transition"
              : "flex items-center hover:border-b hover:text-white hover:cursor-pointer"
          }
        >
          Publish
        </button>
        <div className="flex gap-2 ml-12">
          {currentUser ? (
            <>
              <Link to={"/user"} className="text-lg font-semibold flex items-center mr-6">
                {currentUser.email}
              </Link>
              <Button
                onClick={() => {
                  setCurrentUser(null);
                  localStorage.removeItem("token");
                  delete axios.defaults.headers.common['Authorization'];
                  navigate("/");
                }}
                variant="contained"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => setOpenDialogSignIn(true)}
                variant="contained"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                Sign in
              </Button>
              <Button
                variant="outlined"
                onClick={() => setOpenDialogSignUp(true)}
                sx={
                  pathname === "/rent"
                    ? {
                        color: "black",
                        borderColor: "black",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                        },
                      }
                    : {
                        color: "white",
                        borderColor: "white",
                        "&:hover": {
                          backgroundColor: "white",
                          color: "black",
                        },
                      }
                }
              >
                Register
              </Button>
            </>
          )}
        </div>
      </ul>

      <AnimatePresence initial={false}>
        {alert ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start hidden and move up
            animate={{ opacity: 1, y: 0 }} // Animate in
            exit={{ opacity: 0, y: 50 }} // Animate out
            transition={{ duration: 0.5 }}
            className="fixed bottom-2 right-2 z-20"
          >
            <Alert variant="filled" severity="error">
              You must sign in to publish a car.
            </Alert>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
