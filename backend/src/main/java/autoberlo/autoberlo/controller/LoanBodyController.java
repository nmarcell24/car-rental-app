package autoberlo.autoberlo.controller;


import autoberlo.autoberlo.dto.cars.CarList;
import autoberlo.autoberlo.dto.cars.CarRead;
import autoberlo.autoberlo.dto.cars.CarSave;
import autoberlo.autoberlo.dto.loanBody.LoanBodyList;
import autoberlo.autoberlo.dto.loanBody.LoanBodyRead;
import autoberlo.autoberlo.dto.loanBody.LoanBodySave;
import autoberlo.autoberlo.service.CarService;
import autoberlo.autoberlo.service.LoanBodyService;
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
public class LoanBodyController {

    @Autowired
    private LoanBodyService loanBodyService;

    @GetMapping("/list")
    @Operation(summary = "List id all of the loanBody")
    public List<LoanBodyList> listAutok() {
        return loanBodyService.listLoanBody();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/creat")
    @Operation(summary = "create new loanbody")
    public LoanBodyRead createLoanBody(@RequestBody @Valid LoanBodySave loanBodySave) {
        return loanBodyService.createLoanBody(loanBodySave);
    }
}
