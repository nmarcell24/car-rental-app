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

@Service
public class CarService {

    @Autowired
    private CarRepository carRepository;

    public CarRead getAuto(Integer id) {
        if (!carRepository.existsById(id)) {
            throw new AutoNotFoundException();
        }
        Car car = carRepository.getReferenceById(id);
        return CarConverter.convertModelToRead(car);
    }

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

    public CarRead createAuto(@Valid CarSave carSave) {
        Car car = carRepository.save(CarConverter.convertSaveToModel(carSave));
        return CarConverter.convertModelToRead(car);
    }

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
        car.setPriceCategoryId(0);

        carRepository.save(car);
    }
}