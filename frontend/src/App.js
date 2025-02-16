import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cataloge from "./pages/Cataloge";
import { Routes, Route, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import { Dialog } from "@mui/material";

function App() {
  const [openDialogSignIn, setOpenDialogSignIn] = useState(false);
  const [openDialogSignUp, setOpenDialogSignUp] = useState(false);

  return (
    <div>
      <Header setOpenDialogSignIn={setOpenDialogSignIn} setOpenDialogSignUp={setOpenDialogSignUp} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cataloge" element={<Cataloge />} />
      </Routes>
      <Footer />


      {/* Sign in */}
      <Dialog open={openDialogSignIn} onClose={() => setOpenDialogSignIn(false)}>
        <SignIn setOpenDialog={setOpenDialogSignIn}/>
      </Dialog>
      
      {/* Sign up */}
      <Dialog open={openDialogSignUp} onClose={() => setOpenDialogSignUp(false)}>
        <SignUp setOpenDialog={setOpenDialogSignUp}/>
      </Dialog>
    </div>
  );
}

export default App;
