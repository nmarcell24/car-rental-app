package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.config.GlobalVariable;
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
        carRead.setBrand(car.getBrand());
        carRead.setCarType(car.getCarType());
        carRead.setHorsePower(car.getHorsePower());
        carRead.setModelYear(car.getModelYear());
        carRead.setNumberOfSeats(car.getNumberOfSeats());
        carRead.setFuelType(car.getFuelType());
        carRead.setTransmissionType(car.getTransmissionType());
        carRead.setDriveTrain(car.getDriveTrain());
        carRead.setImageUrl(car.getImageUrl());
        carRead.setPriceCategoryId(extracted(car.getPriceCategoryId()));


        return carRead;
    }

    private static int extracted(int priceCategoryId) {
        int category = 0;
        if (priceCategoryId == 0){
            category = GlobalVariable.CATEGORY_LOW_PRICE;
        } else if (priceCategoryId == 1) {
            category = GlobalVariable.CATEGORY_MID_PRICE;
        }else {
            category = GlobalVariable.CATEGORY_PREMIUM_PRICE;
        }
        return category;
    }


    public static Car convertSaveToModel(CarSave carSave) {
        Car car = new Car();
        car.setBrand(carSave.getBrand());
        car.setCarType(carSave.getCarType());
        car.setHorsePower(carSave.getHorsePower());
        car.setModelYear(carSave.getModelYear());
        car.setNumberOfSeats(carSave.getNumberOfSeats());
        car.setFuelType(carSave.getFuelType());
        car.setTransmissionType(carSave.getTransmissionType());
        car.setDriveTrain(carSave.getDriveTrain());
        car.setImageUrl(carSave.getImageUrl());
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
        carList.setBrand(car.getBrand());
        carList.setCarType(car.getCarType());
        carList.setNumberOfSeats(car.getNumberOfSeats());
        carList.setFuelType(car.getFuelType());
        carList.setTransmissionType(car.getTransmissionType());
        carList.setDriveTrain(car.getDriveTrain());
        carList.setImageUrl(car.getImageUrl());
        carList.setPriceCategoryId(extracted(car.getPriceCategoryId()));

        return carList;
    }
}
