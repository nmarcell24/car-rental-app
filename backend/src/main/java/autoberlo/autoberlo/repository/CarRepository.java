package autoberlo.autoberlo.repository;

import autoberlo.autoberlo.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Repository interface for handling CRUD operations on the 'Car' entity.
 * This interface extends JpaRepository, which provides built-in methods for database operations.
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */
public interface CarRepository extends JpaRepository<Car, Integer> {

}
