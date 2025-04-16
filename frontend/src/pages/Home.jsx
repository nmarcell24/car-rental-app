import Browse from "../homeComponents/Browse";
import BuySellCarSection from "../homeComponents/BuySellCarSection";
import PopularRentalDeals from "../homeComponents/PopularRentalDeals"
import Form from "../homeComponents/Form";
import LogoShow from "../homeComponents/LogoShow";
import StatsCounter from "../homeComponents/StatsCounter";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-[#f1c656] pt-7">
      <div className="mb-6">
        <div className="flex items-center justify-around">
          <Form />
          <motion.img
            className="hidden md:block md:h-52 lg:h-80"
            src="/images/dodge_cropped.png"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.8,
            }}
          />
        </div>
      </div>
      <LogoShow />
      {/* <Browse /> */}
      <PopularRentalDeals />
      <BuySellCarSection />
      <StatsCounter />
    </div>
  );
};

export default Home;
