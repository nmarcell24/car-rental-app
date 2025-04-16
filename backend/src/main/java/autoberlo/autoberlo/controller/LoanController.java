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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loan")
@Tag(name="LoanBody manage", description = "Create, read, and list loans")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @PreAuthorize("hasAuthority('LIST_LOANS')")
    @GetMapping("/list")
    @Operation(summary = "List id all of the loan", description = "Returns a list of all loan records in the system. Requires LIST_LOANS permission.")
    public List<LoanList> listLoan() {
        return loanService.listLoan();
    }

    @PreAuthorize("hasAuthority('CREATE_LOAN')")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create")
    @Operation(
            summary = "Create a new loan",
            description = "Adds a new loan record to the system. Requires CREATE_LOAN permission."
    )
    public LoanRead createLoan(@RequestBody @Valid LoanSave loanSave) {
        return loanService.createLoan(loanSave);
    }
}
