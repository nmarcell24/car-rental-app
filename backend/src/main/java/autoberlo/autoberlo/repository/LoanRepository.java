package autoberlo.autoberlo.repository;

import autoberlo.autoberlo.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan, Integer> {
}
