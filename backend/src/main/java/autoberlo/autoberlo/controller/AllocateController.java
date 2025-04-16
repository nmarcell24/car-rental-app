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

/**
 * REST Controller for managing user permission allocations.
 * <p>
 * Provides endpoints to:
 * <ul>
 *     <li>Create a new allocation (assigning permissions to a user)</li>
 *     <li>List all existing allocations</li>
 * </ul>
 *
 * Authors: Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@RestController
public class AllocateController {

    @Autowired
    private AllocateService allocateService;

    /**
     * Creates a new user-permission allocation.
     *
     * @param allocateSave DTO containing user and permission data
     * @return AllocateRead DTO with the saved allocation details
     */

    @PostMapping("/allocate/create")
    public AllocateRead createAllocate(@RequestBody @Valid AllocateSave allocateSave) {
        return allocateService.createAllocate(allocateSave);
    }

    /**
     * Returns a list of all current allocations (user and their permissions).
     *
     * @return list of AllocateList DTOs
     */

    @GetMapping("allocate/list")
    @Operation(summary = "List name all of the user")
    public List<AllocateList> listAllocate() {
        return allocateService.listAllocate();
    }
}
