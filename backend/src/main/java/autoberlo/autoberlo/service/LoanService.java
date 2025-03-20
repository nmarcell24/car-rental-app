package autoberlo.autoberlo.service;

import autoberlo.autoberlo.converter.LoanConverter;
import autoberlo.autoberlo.dto.loan.LoanList;
import autoberlo.autoberlo.dto.loan.LoanSave;
import autoberlo.autoberlo.dto.loan.LoanRead;
import autoberlo.autoberlo.model.Loan;
import autoberlo.autoberlo.repository.LoanRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LoanService {

    @Autowired
    private LoanRepository loanRepository;

    public List<LoanList> listLoan() {
        List<Loan> loans = loanRepository.findAll();
        return LoanConverter.convertModelsToList(loans);
    }

    public LoanRead createLoan(@Valid LoanSave loanSave) {
        Loan loan = loanRepository.save(LoanConverter.convertSaveToModel(loanSave));
        return LoanConverter.convertModelToRead(loan);
    }
}
