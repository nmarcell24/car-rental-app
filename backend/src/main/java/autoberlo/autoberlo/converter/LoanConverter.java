package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.dto.loan.LoanList;
import autoberlo.autoberlo.dto.loan.LoanSave;
import autoberlo.autoberlo.dto.loan.LoanRead;
import autoberlo.autoberlo.model.Loan;

import java.util.ArrayList;
import java.util.List;

public class LoanConverter {

    public static LoanRead convertModelToRead(Loan loan){
        LoanRead loanRead = new LoanRead();
        loanRead.setId(loan.getId());
        loanRead.setCarId(loan.getCarId());
        loanRead.setStartDate(loan.getStartDate());
        loanRead.setEndDate(loan.getEndDate());
        loanRead.setTotalPrice(loan.getTotalPrice());
        loanRead.setUserId(loan.getUserId());

        return loanRead;
    }

    public static Loan convertSaveToModel(LoanSave loanSave) {
        Loan loan = new Loan();
        loan.setCarId(loanSave.getCarId());
        loan.setStartDate(loanSave.getStartDate());
        loan.setEndDate(loanSave.getEndDate());
        loan.setTotalPrice(loanSave.getTotalPrice());
        loan.setUserId(loanSave.getUserId());

        return loan;
    }

    public static List<LoanList> convertModelsToList(List<Loan> loan) {
        List<LoanList> dtoLoanBody = new ArrayList<>();
        for (Loan loans : loan) {
            dtoLoanBody.add(convertModelToList(loans));
        }
        return dtoLoanBody;
    }

    private static LoanList convertModelToList(Loan loans) {
        LoanList loanList = new LoanList();
        loanList.setId(loans.getId());
        loanList.setCarId(loans.getCarId());
        loanList.setUserId(loans.getUserId());

        return loanList;
    }
}
