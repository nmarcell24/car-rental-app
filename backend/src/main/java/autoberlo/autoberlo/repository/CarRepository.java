package autoberlo.autoberlo.repository;

import autoberlo.autoberlo.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Integer> {

}
