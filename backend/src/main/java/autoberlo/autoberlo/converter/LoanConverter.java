package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.dto.loan.LoanList;
import autoberlo.autoberlo.dto.loan.LoanSave;
import autoberlo.autoberlo.dto.loan.LoanRead;
import autoberlo.autoberlo.model.Loan;

import java.util.ArrayList;
import java.util.List;

/**
 * Converter class responsible for transforming Loan entities to their corresponding DTOs and vice versa.
 * <p>
 * This utility class includes methods to:
 * <ul>
 *     <li>Convert a Loan model to a LoanRead DTO</li>
 *     <li>Convert a LoanSave DTO to a Loan model</li>
 *     <li>Convert a list of Loan models to a list of LoanList DTOs</li>
 * </ul>
 *
 * Authors: Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

public class LoanConverter {

    /**
     * Converts a Loan entity to a LoanRead DTO.
     *
     * @param loan the Loan model to convert
     * @return a LoanRead DTO containing full loan details
     */

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

    /**
     * Converts a LoanSave DTO to a Loan entity.
     *
     * @param loanSave the LoanSave DTO containing user input
     * @return a Loan entity ready for persistence
     */

    public static Loan convertSaveToModel(LoanSave loanSave) {
        Loan loan = new Loan();
        loan.setCarId(loanSave.getCarId());
        loan.setStartDate(loanSave.getStartDate());
        loan.setEndDate(loanSave.getEndDate());
        loan.setTotalPrice(loanSave.getTotalPrice());
        loan.setUserId(loanSave.getUserId());

        return loan;
    }

    /**
     * Converts a list of Loan entities to a list of LoanList DTOs.
     *
     * @param loan list of Loan models
     * @return list of simplified LoanList DTOs
     */

    public static List<LoanList> convertModelsToList(List<Loan> loan) {
        List<LoanList> dtoLoanBody = new ArrayList<>();
        for (Loan loans : loan) {
            dtoLoanBody.add(convertModelToList(loans));
        }
        return dtoLoanBody;
    }


    /**
     * Converts a single Loan entity to a LoanList DTO.
     *
     * @param loans the Loan model to convert
     * @return LoanList DTO containing summary information
     */

    private static LoanList convertModelToList(Loan loans) {
        LoanList loanList = new LoanList();
        loanList.setId(loans.getId());
        loanList.setCarId(loans.getCarId());
        loanList.setStartDate(loans.getStartDate());
        loanList.setEndDate(loans.getEndDate());
        loanList.setTotalPrice(loans.getTotalPrice());
        loanList.setUserId(loans.getUserId());

        return loanList;
    }
}
