package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.config.GlobalVariable;
import autoberlo.autoberlo.dto.cars.CarList;
import autoberlo.autoberlo.dto.cars.CarRead;
import autoberlo.autoberlo.dto.cars.CarSave;
import autoberlo.autoberlo.model.Car;

import java.util.ArrayList;
import java.util.List;

/**
 * Converter class for handling transformations between Car entities and their corresponding DTOs.
 * <p>
 * This utility class provides methods to:
 * <ul>
 *     <li>Convert a Car model to a CarRead DTO</li>
 *     <li>Convert a CarSave DTO to a Car model</li>
 *     <li>Convert a list of Car models to a list of CarList DTOs</li>
 * </ul>
 *
 * Authors: Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

public class CarConverter {

    /**
     * Converts a Car entity to a CarRead DTO.
     *
     * @param car the Car model to convert
     * @return a CarRead DTO containing detailed car information
     */

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

    /**
     * Helper method to convert internal price category IDs to predefined global constants.
     *
     * @param priceCategoryId raw price category ID
     * @return mapped global category constant
     */

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

    /**
     * Converts a CarSave DTO to a Car entity.
     *
     * @param carSave the DTO containing user input data
     * @return a Car model ready for persistence
     */


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
        car.setPriceCategoryId(extracted(carSave.getPriceCategoryId()));

        return car;
    }

    /**
     * Converts a list of Car entities to a list of CarList DTOs.
     *
     * @param autok list of Car models
     * @return list of simplified CarList DTOs
     */



    public static List<CarList> convertModelsToList(List<Car> autok) {
        List<CarList> dtoAuto = new ArrayList<>();
        for (Car car : autok) {
            dtoAuto.add(convertModelToList(car));
        }
        return dtoAuto;
    }

    /**
     * Converts a Car model to a simplified CarList DTO.
     *
     * @param car the Car model to convert
     * @return CarList DTO
     */

    private static CarList convertModelToList(Car car) {
        CarList carList = new CarList();
        carList.setId(car.getId());
        carList.setBrand(car.getBrand());
        carList.setCarType(car.getCarType());
        carList.setNumberOfSeats(car.getNumberOfSeats());
        carList.setFuelType(car.getFuelType());
        carList.setTransmissionType(car.getTransmissionType());
        carList.setImageUrl(car.getImageUrl());
        carList.setPriceCategoryId(extracted(car.getPriceCategoryId()));

        return carList;
    }
}
