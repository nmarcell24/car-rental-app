import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import QuestionMark from "@mui/icons-material/QuestionMark";
import { CarRental, Home, Menu } from "@mui/icons-material";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CarRental />
            </ListItemIcon>
            <ListItemText primary={"Car Cataloge"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Contact Us"} />
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
        <Button onClick={toggleDrawer(true)}><Menu /></Button>
        <Drawer className="md:hidden relative" open={open} anchor={"right"} onClose={toggleDrawer(false)}>
          {DrawerList}
          <div className="flex w-full justify-evenly absolute bottom-0">
            <Button variant="contained">Sign in</Button>
            <Button variant="outlined">Register</Button>
          </div>
        </Drawer>
      </div>
      <ul className="hidden md:flex gap-4">
        <li className="flex items-center">Home</li>
        <li className="flex items-center">Cataloge</li>
        <li className="flex items-center">Contact</li>
        <li className="flex items-center">Help</li>
        <div className="flex gap-2 ml-12">
          <Button variant="contained">Sign in</Button>
          <Button variant="outlined">Register</Button>
        </div>
      </ul>
    </div>
  );
}
