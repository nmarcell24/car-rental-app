import CarCard from "../carcatalogeComponments/CarCard";
import DummyCars from "../data/dummydata.json"

const Cataloge = () => {
    return (
        <div className="flex items-center justify-center flex-wrap gap-8 p-4 mb-8">
            {DummyCars.map(car => {
                return (
                    <div>
                        <CarCard {...car} />
                    </div>
                )
            })}
        </div>
    )
}

export default Cataloge;