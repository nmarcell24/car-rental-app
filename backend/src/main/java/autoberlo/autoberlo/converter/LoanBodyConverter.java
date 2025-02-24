package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.dto.cars.CarList;
import autoberlo.autoberlo.dto.cars.CarSave;
import autoberlo.autoberlo.dto.loanBody.LoanBodyList;
import autoberlo.autoberlo.dto.loanBody.LoanBodyRead;
import autoberlo.autoberlo.dto.loanBody.LoanBodySave;
import autoberlo.autoberlo.model.Car;
import autoberlo.autoberlo.model.LoanBody;

import java.util.ArrayList;
import java.util.List;

public class LoanBodyConverter {

    public static LoanBodyRead convertModelToRead(LoanBody loanBody){
        LoanBodyRead loanBodyRead = new LoanBodyRead();
        loanBodyRead.setId(loanBody.getId());
        loanBodyRead.setUserId(loanBody.getUserId());
        loanBodyRead.setLoanBodyId(loanBody.getLoanBodyId());

        return loanBodyRead;
    }

    public static LoanBody convertSaveToModel(LoanBodySave loanBodySave) {
        LoanBody loanBody = new LoanBody();
        loanBody.setUserId(loanBodySave.getUserId());
        loanBody.setLoanBodyId(loanBodySave.getLoanBodyId());

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
        loanBodyList.setUserId(loanbody.getUserId());
        loanBodyList.setLoanBodyId(loanbody.getLoanBodyId());

        return loanBodyList;
    }
}
