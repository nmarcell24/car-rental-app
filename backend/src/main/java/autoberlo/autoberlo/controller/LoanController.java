package autoberlo.autoberlo.controller;


import autoberlo.autoberlo.dto.loan.LoanList;
import autoberlo.autoberlo.dto.loan.LoanSave;
import autoberlo.autoberlo.dto.loan.LoanRead;
import autoberlo.autoberlo.service.LoanService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loan")
@Tag(name="LoanBody manage", description = "Read, list, creat")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @GetMapping("/list")
    @Operation(summary = "List id all of the loan")
    public List<LoanList> listLoan() {
        return loanService.listLoan();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/creat")
    @Operation(summary = "create new loan")
    public LoanRead createLoan(@RequestBody @Valid LoanSave loanSave) {
        return loanService.createLoan(loanSave);
    }
}
