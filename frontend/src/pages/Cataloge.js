import { useEffect } from "react";
import CarCard from "../carcatalogeComponments/CarCard";
import DummyCars from "../data/dummydata.json"

const Cataloge = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

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