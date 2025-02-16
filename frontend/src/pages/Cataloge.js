import { useEffect, useState } from "react";
import CarCard from "../carcatalogeComponments/CarCard";
import DummyCars from "../data/dummydata.json"

const Cataloge = () => {

    const [cars, setCars] = useState([]);

    const fetchCars = async () => {
        const res = await fetch("/cars/autolist");
        const data = await res.json();
        setCars(data);
    }

    useEffect(() => {
        fetchCars()
        window.scroll(0, 0)
    }, [])
    
    console.log(cars);
    

    return (
        <div className="flex items-center justify-center flex-wrap gap-8 p-4 mb-8">
            {DummyCars.map((car, index) => {
                return (
                    <div>
                        <CarCard {...car} index={index} />
                    </div>
                )
            })}
        </div>
    )
}

export default Cataloge;