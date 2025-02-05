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
        carRead.setCarType(car.getCarType());
        carRead.setHorsePower(car.getHorsePower());
        carRead.setModelYear(car.getModelYear());
        carRead.setNumberOfSeats(car.getNumberOfSeats());
        carRead.setFuelType(car.getFuelType());
        carRead.setTransmissionType(car.getTransmissionType());
        carRead.setDriveTrain(car.getDriveTrain());
        carRead.setPriceCategoryId(car.getPriceCategoryId());
        return carRead;
    }


    public static Car convertSaveToModel(CarSave carSave) {
        Car car = new Car();
        car.setMarka(car.getMarka());
        car.setCarType(car.getCarType());
        car.setHorsePower(car.getHorsePower());
        car.setModelYear(car.getModelYear());
        car.setNumberOfSeats(car.getNumberOfSeats());
        car.setFuelType(car.getFuelType());
        car.setTransmissionType(car.getTransmissionType());
        car.setDriveTrain(car.getDriveTrain());
        car.setPriceCategoryId(car.getPriceCategoryId());

        return car;
    }

    public static Car convertSaveToModel(Integer id, CarSave carSave) {
        Car car = new Car();
        car.setId(id);
        car.setMarka(carSave.getMarka());
        car.setCarType(carSave.getCarType());
        car.setHorsePower(carSave.getHorsePower());
        car.setModelYear(carSave.getModelYear());
        car.setNumberOfSeats(carSave.getNumberOfSeats());
        car.setFuelType(carSave.getFuelType());
        car.setTransmissionType(carSave.getTransmissionType());
        car.setDriveTrain(carSave.getDriveTrain());
        car.setPriceCategoryId(carSave.getPriceCategoryId());

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
        carList.setCarType(car.getCarType());
        carList.setHorsePower(car.getHorsePower());
        return carList;
    }
}
