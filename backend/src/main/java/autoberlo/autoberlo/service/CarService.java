package autoberlo.autoberlo.service;

import autoberlo.autoberlo.converter.CarConverter;
import autoberlo.autoberlo.dto.cars.CarList;
import autoberlo.autoberlo.dto.cars.CarRead;
import autoberlo.autoberlo.dto.cars.CarSave;
import autoberlo.autoberlo.exception.AutoNotFoundException;
import autoberlo.autoberlo.model.Car;
import autoberlo.autoberlo.repository.CarRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Service class responsible for managing car-related operations.
 *
 * This includes retrieving, listing, creating, and soft-deleting cars in the system.
 * It also handles conversion between entity models and DTOs.
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Service
public class CarService {


    @Autowired
    private CarRepository carRepository;


    /**
     * Retrieves a specific car by its ID.
     *
     * If the car does not exist, an {@link AutoNotFoundException} is thrown.
     * The result is returned as a {@link CarRead} DTO.
     *
     * @param id The ID of the car to retrieve.
     * @return The car's data in readable DTO format.
     * @throws AutoNotFoundException if the car is not found.
     */

    public CarRead getAuto(Integer id) {
        if (!carRepository.existsById(id)) {
            throw new AutoNotFoundException();
        }
        Car car = carRepository.getReferenceById(id);
        return CarConverter.convertModelToRead(car);
    }

    /**
     * Retrieves a list of all valid cars.
     *
     * Filters out cars with incomplete or placeholder data and converts them to {@link CarList} DTOs.
     *
     * @return A list of valid cars in DTO format.
     */

    public List<CarList> listAutok() {
        List<Car> autok = carRepository.findAll().stream()
                .filter(car -> car.getBrand() != null
                        && car.getCarType() != null
                        && car.getNumberOfSeats() != 0
                        && car.getFuelType() != null
                        && car.getTransmissionType() != null
                        && car.getImageUrl() != null
                        && car.getPriceCategoryId() != -1)
                .collect(Collectors.toList());
        return CarConverter.convertModelsToList(autok);
    }

    /**
     * Creates a new car entry in the database.
     *
     * The input {@link CarSave} DTO is converted to a {@link Car} entity and saved,
     * then returned as a {@link CarRead} DTO.
     *
     * @param carSave The DTO containing data for the new car.
     * @return The saved car's data in readable DTO format.
     */

    public CarRead createAuto(@Valid CarSave carSave) {
        Car car = carRepository.save(CarConverter.convertSaveToModel(carSave));
        return CarConverter.convertModelToRead(car);
    }

    /**
     * Soft-deletes a car by clearing its main fields instead of removing it from the database.
     *
     * If the car is not found by ID, an {@link AutoNotFoundException} is thrown.
     *
     * @param id The ID of the car to delete.
     * @throws AutoNotFoundException if the car is not found.
     */

    public void deleteAuto(Integer id) {
        Car car = carRepository.findById(id)
                .orElseThrow(AutoNotFoundException::new);

        car.setBrand(null);
        car.setCarType(null);
        car.setHorsePower(0);
        car.setModelYear(0);
        car.setNumberOfSeats(0);
        car.setFuelType(null);
        car.setTransmissionType(null);
        car.setDriveTrain(null);
        car.setImageUrl(null);
        car.setPriceCategoryId(-1);

        carRepository.save(car);
    }
}