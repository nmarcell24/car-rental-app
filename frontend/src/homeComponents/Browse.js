import { useState } from "react";

const Browse = () => {
  const [carTypes, setCarTypes] = useState([
    "SUV",
    "Sedan",
    "Coupe",
    "Hybrid",
    "Electric",
  ]);

  return (
    <div className="bg-gray-50">
      <h1 className="text-center pt-10 lg:pt-12 pb-5 lg:pb-8 text-3xl lg:text-5xl font-semibold">
        Browse By Type
      </h1>
      <div className="grid grid-cols-3 place-items-center gap-y-4 sm:flex sm:justify-evenly ">
        {carTypes.map((carType) => (
          <div className="flex flex-col items-center justify-center p-3 shadow text-center w-28 h-28 rounded">
            <img className="h-10" src={`/cartypes/${carType.toLowerCase()}.svg`} />
            <p>{carType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;
