package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.dto.cars.CarList;
import autoberlo.autoberlo.dto.cars.CarRead;
import autoberlo.autoberlo.dto.cars.CarSave;
import autoberlo.autoberlo.model.Car;

import java.util.ArrayList;
import java.util.List;

public class CarConverter {

    public static CarRead convertModelToRead(Car car) {
        CarRead carRead = new CarRead();
        carRead.setId(car.getId());
        carRead.setMarka(car.getMarka());
        carRead.setType(car.getType());
        carRead.setPower(car.getPower());
        carRead.setModelYear(car.getModelYear());
        carRead.setNumberOfSeats(car.getNumberOfSeats());
        carRead.setFuelType(car.getFuelType());
        carRead.setTransmissionType(car.getTransmissionType());
        carRead.setDrivetrain(car.getDrivetrain());
        carRead.setPriceId(car.getPriceId());
        return carRead;
    }


    public static Car convertSaveToModel(CarSave carSave) {
        Car car = new Car();
        car.setMarka(car.getMarka());
        car.setType(car.getType());
        car.setPower(car.getPower());
        car.setModelYear(car.getModelYear());
        car.setNumberOfSeats(car.getNumberOfSeats());
        car.setFuelType(car.getFuelType());
        car.setTransmissionType(car.getTransmissionType());
        car.setDrivetrain(car.getDrivetrain());
        car.setPriceId(car.getPriceId());

        return car;
    }

    public static Car convertSaveToModel(Integer id, CarSave carSave) {
        Car car = new Car();
        car.setId(id);
        car.setMarka(carSave.getMarka());
        car.setType(carSave.getType());
        car.setPower(carSave.getPower());
        car.setModelYear(carSave.getModelYear());
        car.setNumberOfSeats(carSave.getNumberOfSeats());
        car.setFuelType(carSave.getFuelType());
        car.setTransmissionType(carSave.getTransmissionType());
        car.setDrivetrain(carSave.getDrivetrain());
        car.setPriceId(carSave.getPriceId());

        return car;
    }

    public static List<CarList> convertModelsToList(List<Car> autok) {
        List<CarList> dtoAuto = new ArrayList<>();
        for (Car car : autok) {
            dtoAuto.add(convertModelToList(car));
        }
        return dtoAuto;
    }

    private static CarList convertModelToList(Car car) {
        CarList carList = new CarList();
        carList.setId(car.getId());
        carList.setMarka(car.getMarka());
        carList.setType(car.getType());
        carList.setPower(car.getPower());
        return carList;
    }
}
