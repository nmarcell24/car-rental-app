package autoberlo.autoberlo.controller;

import autoberlo.autoberlo.dto.allocate.AllocateList;
import autoberlo.autoberlo.dto.allocate.AllocateRead;
import autoberlo.autoberlo.dto.allocate.AllocateSave;
import autoberlo.autoberlo.service.AllocateService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AllocateController {

    @Autowired
    private AllocateService allocateService;

    @PostMapping("/allocate/create")
    public AllocateRead createAllocate(@RequestBody @Valid AllocateSave allocateSave) {
        return allocateService.createAllocate(allocateSave);
    }

    @GetMapping("allocate/list")
    @Operation(summary = "List name all of the user")
    public List<AllocateList> listAllocate() {
        return allocateService.listAllocate();
    }
}
