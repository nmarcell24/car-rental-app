package autoberlo.autoberlo.repository;

import autoberlo.autoberlo.model.Allocate;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Repository interface for handling CRUD operations on the 'Allocate' entity.
 * This interface extends JpaRepository, which provides built-in methods for database operations.
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */
public interface AllocateRepository  extends JpaRepository<Allocate, Integer> {
}
