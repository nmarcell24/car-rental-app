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

    public CarRead updateAuto(Integer id, @Valid CarSave carSave) {
        if (!carRepository.existsById(id)) {
            throw new AutoNotFoundException();
        }
        Car car = carRepository.save(CarConverter.convertSaveToModel(id, carSave));
        return CarConverter.convertModelToRead(car);
    }

    public List<CarList> listAutok() {
        List<Car> autok = carRepository.findAll();
        return CarConverter.convertModelsToList(autok);
    }

    public CarRead createAuto(@Valid CarSave carSave) {
        Car car = carRepository.save(CarConverter.convertSaveToModel(carSave));
        return CarConverter.convertModelToRead(car);
    }

    public void deleteAuto(Integer id) {
        Car car = carRepository.findById(id)
                .orElseThrow(AutoNotFoundException::new);

        car.setBrand("");
        car.setCarType("");
        car.setHorsePower(0);
        car.setModelYear(0);
        car.setNumberOfSeats(0);
        car.setFuelType("");
        car.setTransmissionType("");
        car.setDriveTrain("");
        car.setImageUrl("");
        car.setPriceCategoryId(0);

        carRepository.save(car);
    }
}