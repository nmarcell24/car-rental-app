package autoberlo.autoberlo.controller;

import autoberlo.autoberlo.dto.loanHead.LoanHeadList;
import autoberlo.autoberlo.dto.loanHead.LoanHeadRead;
import autoberlo.autoberlo.dto.loanHead.LoanHeadSave;
import autoberlo.autoberlo.service.LoanHeadService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loanbody")
@Tag(name="LoanBody manage", description = "Read, list, creat")
public class LoanHeadController {

    @Autowired
    private LoanHeadService loanHeadService;

    @GetMapping("/list")
    @Operation(summary = "List id all of the loanHead")
    public List<LoanHeadList> listLoanHead() {
        return loanHeadService.listLoanHead();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/creat")
    @Operation(summary = "create new loanHead")
    public LoanHeadRead createLoanHead(@RequestBody @Valid LoanHeadSave loanHeadSave) {
        return loanHeadService.createLoanHead(loanHeadSave);
    }
}
