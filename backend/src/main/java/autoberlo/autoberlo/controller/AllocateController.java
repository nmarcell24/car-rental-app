package autoberlo.autoberlo.controller;

import autoberlo.autoberlo.dto.allocate.AllocateRead;
import autoberlo.autoberlo.dto.allocate.AllocateSave;
import autoberlo.autoberlo.service.AllocateService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AllocateController {

    private AllocateService allocateService;

    @PostMapping("/allocate/create")
    public AllocateRead createAllocate(@RequestBody @Valid AllocateSave allocateSave) {
        return allocateService.createAllocate(allocateSave);
    }
}
