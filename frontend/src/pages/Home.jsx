import Browse from "../homeComponents/Browse";
import BuySellCarSection from "../homeComponents/BuySellCarSection";
import PopularRentalDeals from "../homeComponents/PopularRentalDeals"
import Form from "../homeComponents/Form";
import LogoShow from "../homeComponents/LogoShow";
import StatsCounter from "../homeComponents/StatsCounter";

const Home = () => {

  return (
    <div className="bg-[#f1c656] pt-7">
      <div className="mb-6">
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
      <PopularRentalDeals />
      <BuySellCarSection />
      <StatsCounter />
    </div>
  );
};

export default Home;
