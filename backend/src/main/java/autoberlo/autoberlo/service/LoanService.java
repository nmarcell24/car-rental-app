package autoberlo.autoberlo.service;

import autoberlo.autoberlo.converter.LoanConverter;
import autoberlo.autoberlo.dto.loan.LoanList;
import autoberlo.autoberlo.dto.loan.LoanSave;
import autoberlo.autoberlo.dto.loan.LoanRead;
import autoberlo.autoberlo.exception.LoanAlreadyExcistsException;
import autoberlo.autoberlo.model.Loan;
import autoberlo.autoberlo.repository.LoanRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

/**
 * Service class for managing car loan (rental) operations.
 *
 * Provides functionality to list and create loan records, while converting between entity and DTO representations.
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */
@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    /**
     * Retrieves a list of all loan (rental) records.
     *
     * Converts the list of {@link Loan} entities to a list of {@link LoanList} DTOs.
     *
     * @return A list of loans in DTO format.
     */

    public List<LoanList> listLoan() {
        List<Loan> loans = loanRepository.findAll();
        return LoanConverter.convertModelsToList(loans);
    }

    /**
     * Creates a new loan (rental) entry in the database.
     *
     * Converts the provided {@link LoanSave} DTO into a {@link Loan} entity, saves it,
     * and returns the saved data as a {@link LoanRead} DTO.
     *
     * @param loanSave The DTO containing loan data to be saved.
     * @return The created loan in readable DTO format.
     */

    public LoanRead createLoan(@Valid LoanSave loanSave) {
        List<Loan> loans = loanRepository.findAll();
        for (Loan loan : loans) {
            LocalDate existingStart = loan.getStartDate();
            LocalDate existingEnd = loan.getEndDate();

            if (loan.getCarId() == loanSave.getCarId() && !(loanSave.getEndDate().isBefore(existingStart) || loanSave.getStartDate().isAfter(existingEnd))) {
                throw new LoanAlreadyExcistsException("Car is already loaned during this period.");
            }
        }
        Loan newLoan = loanRepository.save(LoanConverter.convertSaveToModel(loanSave));
        return LoanConverter.convertModelToRead(newLoan);
    }
}
