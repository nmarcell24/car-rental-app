import { useState } from "react";
import Browse from "./homeComponents/Browse";
import Form from "./homeComponents/Form";
import Header from "./components/Header";
import LogoShow from "./homeComponents/LogoShow";
import PopularRentalDetails from "./homeComponents/PopularRentalDeals";
import StatsCounter from "./homeComponents/StatsCounter";
import BuySellCarSection from "./homeComponents/BuySellCarSection";
import Footer from "./components/Footer";

function App() {
  const [cars, setCars] = useState([
    {
      name: "Jaguar XE L P250",
      price: 42,
      img: "",
      clutch: "Manual",
      seats: 5,
      consumption: 24,
    },
  ]);

  return (
    <div className="appContainer">
      <div className="mb-6">
        <Header />
        <div className="flex items-center justify-around">
          <Form />
          <img
            className="hidden md:block md:h-52 lg:h-80"
            src="/dodge_cropped.png"
          />
        </div>
      </div>
      <LogoShow />
      <Browse />
      <PopularRentalDetails />
      <BuySellCarSection />
      <StatsCounter />
      <Footer />
    </div>
  );
}

export default App;
