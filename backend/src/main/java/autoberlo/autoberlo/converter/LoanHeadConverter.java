package autoberlo.autoberlo.converter;


import autoberlo.autoberlo.dto.loanHead.LoanHeadList;
import autoberlo.autoberlo.dto.loanHead.LoanHeadRead;
import autoberlo.autoberlo.dto.loanHead.LoanHeadSave;
import autoberlo.autoberlo.model.LoanHead;

import java.util.ArrayList;
import java.util.List;

public class LoanHeadConverter {

    public static LoanHeadRead convertModelToRead(LoanHead loanHead){
        LoanHeadRead loanHeadRead = new LoanHeadRead();
        loanHeadRead.setId(loanHead.getId());
        loanHeadRead.setUserId(loanHead.getUserId());
        loanHeadRead.setLoanBodyId(loanHead.getLoanBodyId());

        return loanHeadRead;
    }

    public static LoanHead convertSaveToModel(LoanHeadSave loanHeadSave) {
        LoanHead loanHead = new LoanHead();
        loanHead.setUserId(loanHeadSave.getUserId());
        loanHead.setLoanBodyId(loanHeadSave.getLoanBodyId());

        return loanHead;
    }

    public static List<LoanHeadList> convertModelsToList(List<LoanHead> loanHeads) {
        List<LoanHeadList> dtoLoanHead = new ArrayList<>();
        for (LoanHead loanHead : loanHeads) {
            dtoLoanHead.add(convertModelToList(loanHead));
        }
        return dtoLoanHead;
    }

    private static LoanHeadList convertModelToList(LoanHead loanHead) {
        LoanHeadList loanBodyList = new LoanHeadList();
        loanBodyList.setId(loanHead.getId());
        loanBodyList.setUserId(loanHead.getUserId());
        loanBodyList.setLoanBodyId(loanHead.getLoanBodyId());

        return loanBodyList;
    }
}
