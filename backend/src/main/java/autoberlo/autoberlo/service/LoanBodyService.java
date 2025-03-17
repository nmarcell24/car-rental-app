package autoberlo.autoberlo.service;

import autoberlo.autoberlo.converter.LoanBodyConverter;
import autoberlo.autoberlo.dto.loanBody.LoanBodyList;
import autoberlo.autoberlo.dto.loanBody.LoanBodySave;
import autoberlo.autoberlo.dto.loanBody.LoanBodyRead;
import autoberlo.autoberlo.model.LoanBody;
import autoberlo.autoberlo.repository.LoanBodyRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LoanBodyService {

    @Autowired
    private LoanBodyRepository loanBodyRepository;

    public List<LoanBodyList> listLoanBody() {
        List<LoanBody> loanBodies = loanBodyRepository.findAll();
        return LoanBodyConverter.convertModelsToList(loanBodies);
    }

    public LoanBodyRead createLoanBody(@Valid LoanBodySave loanBodySave) {
        LoanBody loanBody = loanBodyRepository.save(LoanBodyConverter.convertSaveToModel(loanBodySave));
        return LoanBodyConverter.convertModelToRead(loanBody);
    }
}
