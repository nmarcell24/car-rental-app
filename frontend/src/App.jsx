import Footer from "./components/Footer";
import Cataloge from "./pages/Cataloge";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import { useState } from "react";
import { Dialog } from "@mui/material";
import CarDetail from "./pages/CarDetails";
import SellYourCar from "./pages/SellYourCar";
import { NotFound } from "./pages/NotFound";
import UserProfile from "./pages/user/UserProfile";
import { useUserContext } from "./hooks/useUserContext";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  const [openDialogSignIn, setOpenDialogSignIn] = useState(false);
  const [openDialogSignUp, setOpenDialogSignUp] = useState(false);
  const { currentUser } = useUserContext();

  if (currentUser && currentUser.id === 1) {
    return <AdminDashboard />;
  }

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
        <Route path="/user" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />

      {/* Sign in */}
      <Dialog
        open={openDialogSignIn}
        onClose={() => setOpenDialogSignIn(false)}
      >
        <SignIn
          setOpenDialog={setOpenDialogSignIn}
          setOpenDialogSignUp={setOpenDialogSignUp}
        />
      </Dialog>

      {/* Sign up */}
      <Dialog
        open={openDialogSignUp}
        onClose={() => setOpenDialogSignUp(false)}
      >
        <SignUp
          setOpenDialog={setOpenDialogSignUp}
          setOpenDialogSignIn={setOpenDialogSignIn}
        />
      </Dialog>
    </div>
  );
}

export default App;
