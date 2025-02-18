import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuestionMark from "@mui/icons-material/QuestionMark";
import { AttachMoney, CarRental, Home, Menu } from "@mui/icons-material";
import { Link, useLocation } from "react-router";
import { useUserContext } from "../hooks/useUserContext";
import { userContext } from "../contexts/userContextProvider";

export default function DrawerList({
  setOpenDialogSignIn,
  setOpenDialogSignUp,
}) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { currentUser, setCurrentUser } = useUserContext(userContext);

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
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AttachMoney />
            </ListItemIcon>
            <ListItemText primary={"Publish a car"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <QuestionMark />
            </ListItemIcon>
            <ListItemText primary={"Help"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div className="md:hidden">
        <Button onClick={toggleDrawer(true)}>
          <Menu />
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
                  setOpen(false)
                }}
              >
                Sign in
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setOpenDialogSignUp(true);
                  setOpen(false)
                }}
              >
                Register
              </Button>
            </div>
          ) : (
            <div className="w-full text-center absolute bottom-0 flex flex-col justify-center gap-3">
              <h1 className="text-lg font-semibold flex items-center justify-center md:mr-6">
                {currentUser.email}
              </h1>
              <Button
                onClick={() => setCurrentUser(null)}
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
        <Link
          to={"/publish"}
          className={
            pathname === "/rent"
              ? "flex items-center hover:border-b hover:border-black hover:cursor-pointer transition-"
              : "flex items-center hover:border-b hover:text-white hover:cursor-pointer"
          }
        >
          Publish
        </Link>
        <Link
          to={"/help"}
          className={
            pathname === "/rent"
              ? "flex items-center hover:border-b hover:border-black hover:cursor-pointer"
              : "flex items-center hover:border-b hover:text-white hover:cursor-pointer"
          }
        >
          Help
        </Link>
        <div className="flex gap-2 ml-12">
          {currentUser ? (
            <>
              <h1 className="text-lg font-semibold flex items-center mr-6">
                {currentUser.email}
              </h1>
              <Button
                onClick={() => setCurrentUser(null)}
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
    </div>
  );
}
