import { Link } from "react-router";

const BuySellCarSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Left Card */}
        <div className="bg-blue-100 rounded-lg p-8 md:py-11 flex flex-col justify-between shadow-md">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Are You Looking <br /> For a Car ?
            </h3>
            <p className="text-gray-600 mb-6">
              We are committed to providing our customers with exceptional
              service.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Link to={"/rent"} className="bg-[#0D1E3A] text-white px-4 py-2 rounded-lg2">
              Get Started →
            </Link>
            <div>
              <img
                src="./logos/logos7.svg"
                alt="Looking for car"
                className="w-16 h-16"
              />
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div className="bg-pink-100 rounded-lg p-8 flex flex-col justify-between shadow-md">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Do You Want to <br /> Sell a Car ?
            </h3>
            <p className="text-gray-600 mb-6">
              We are committed to providing our customers with exceptional
              service.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Link to={"/publish"} className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Get Started →
            </Link>
            <div>
              <img
                src="./logos/logos6.svg"
                alt="Sell a car"
                className="w-16 h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuySellCarSection;
