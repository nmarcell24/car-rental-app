package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.dto.loanBody.LoanBodyList;
import autoberlo.autoberlo.dto.loanBody.LoanBodySave;
import autoberlo.autoberlo.dto.loanBody.LoanBodyRead;
import autoberlo.autoberlo.model.LoanBody;

import java.util.ArrayList;
import java.util.List;

public class LoanBodyConverter {

    public static LoanBodyRead convertModelToRead(LoanBody loanBody){
        LoanBodyRead loanBodyRead = new LoanBodyRead();
        loanBodyRead.setId(loanBody.getId());
        loanBodyRead.setCarId(loanBody.getCarId());
        loanBodyRead.setStartDate(loanBody.getStartDate());
        loanBodyRead.setEndDate(loanBody.getEndDate());
        loanBodyRead.setTotalPrice(loanBody.getTotalPrice());

        return loanBodyRead;
    }

    public static LoanBody convertSaveToModel(LoanBodySave loanBodySave) {
        LoanBody loanBody = new LoanBody();
        loanBody.setCarId(loanBodySave.getCarId());
        loanBody.setStartDate(loanBodySave.getStartDate());
        loanBody.setEndDate(loanBodySave.getEndDate());
        loanBody.setTotalPrice(loanBodySave.getTotalPrice());

        return loanBody;
    }

    public static List<LoanBodyList> convertModelsToList(List<LoanBody> loanbody) {
        List<LoanBodyList> dtoLoanBody = new ArrayList<>();
        for (LoanBody loanBody : loanbody) {
            dtoLoanBody.add(convertModelToList(loanBody));
        }
        return dtoLoanBody;
    }

    private static LoanBodyList convertModelToList(LoanBody loanbody) {
        LoanBodyList loanBodyList = new LoanBodyList();
        loanBodyList.setId(loanbody.getId());
        loanBodyList.setCarId(loanbody.getCarId());

        return loanBodyList;
    }
}
