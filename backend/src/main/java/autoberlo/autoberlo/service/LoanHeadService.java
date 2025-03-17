package autoberlo.autoberlo.service;

import autoberlo.autoberlo.converter.LoanHeadConverter;
import autoberlo.autoberlo.dto.loanHead.LoanHeadList;
import autoberlo.autoberlo.dto.loanHead.LoanHeadRead;
import autoberlo.autoberlo.dto.loanHead.LoanHeadSave;
import autoberlo.autoberlo.model.LoanHead;
import autoberlo.autoberlo.repository.LoanHeadRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LoanHeadService {

    @Autowired
    private LoanHeadRepository loanHeadRepository;

    public List<LoanHeadList> listLoanHead() {
        List<LoanHead> loanHeads = loanHeadRepository.findAll();
        return LoanHeadConverter.convertModelsToList(loanHeads);
    }

    public LoanHeadRead createLoanHead(@Valid LoanHeadSave loanHeadSave) {
        LoanHead loanHead = loanHeadRepository.save(LoanHeadConverter.convertSaveToModel(loanHeadSave));
        return LoanHeadConverter.convertModelToRead(loanHead);
    }
}