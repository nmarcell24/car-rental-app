import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cataloge from "./pages/Cataloge";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import { Dialog } from "@mui/material";
import CarDetail from "./pages/CarDeail";
import SellYourCar from "./pages/SellYourCar";
import { NotFound } from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
// import ManageCars from "./pages/ManageCars";
// import ManageUsers from "./pages/ManageUsers";
// import { useUserContext } from "./hooks/useUserContext";

function App() {
  const [openDialogSignIn, setOpenDialogSignIn] = useState(false);
  const [openDialogSignUp, setOpenDialogSignUp] = useState(false);
  //const { currentUser } = useUserContext();

  // if (currentUser && currentUser.username === "admin"){
  //   return <AdminDashboard/>
  // }
  return (
    <div>
      <Header
        setOpenDialogSignIn={setOpenDialogSignIn}
        setOpenDialogSignUp={setOpenDialogSignUp}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Cataloge />} />
        <Route path="/rent/:id" element={<CarDetail />} />
        <Route path="/publish" element={<SellYourCar />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />

      {/* Sign in */}
      <Dialog
        open={openDialogSignIn}
        onClose={() => setOpenDialogSignIn(false)}
      >
        <SignIn setOpenDialog={setOpenDialogSignIn} setOpenDialogSignUp={setOpenDialogSignUp} />
      </Dialog>

      {/* Sign up */}
      <Dialog
        open={openDialogSignUp}
        onClose={() => setOpenDialogSignUp(false)}
      >
        <SignUp setOpenDialog={setOpenDialogSignUp} setOpenDialogSignIn={setOpenDialogSignIn} />
      </Dialog>
    </div>
  );
}

export default App;
