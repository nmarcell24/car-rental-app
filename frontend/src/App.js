import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cataloge from "./pages/Cataloge";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cataloge" element={<Cataloge />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
