package autoberlo.autoberlo.repository;

import autoberlo.autoberlo.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for handling CRUD operations on the 'Loan' entity.
 * This interface extends JpaRepository, which provides built-in methods for database operations.
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */
public interface LoanRepository extends JpaRepository<Loan, Integer> {
}
