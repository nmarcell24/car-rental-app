package autoberlo.autoberlo.controller;


import autoberlo.autoberlo.dto.autok.AutoList;
import autoberlo.autoberlo.dto.autok.AutoRead;
import autoberlo.autoberlo.dto.autok.AutoSave;
import autoberlo.autoberlo.service.AutoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
@Tag(name="Auto Berles manage", description = "CRUD+ List")
public class autoberlesController {

    @Autowired
    private AutoService autoService;

    @GetMapping("/autolist")
    @Operation(summary = "List name all of the cars")
    public List<AutoList> listAutok() {
        return autoService.listAutok();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/autocreate")
    @Operation(summary = "create new car")
    public AutoRead createAuto(@RequestBody @Valid AutoSave autoSave){
        return autoService.createAuto(autoSave);
    }

    @PutMapping("/auto/{id}")
    @Operation(summary = "Update car by id")
    public AutoRead updateAuto(@Valid @PathVariable Integer id, AutoSave autoSave ) {
        return autoService.updateAuto(id, autoSave);
    }

    @GetMapping("/auto/{id}")
    @Operation(summary = "Read car by id")
    public AutoRead getAuto(@Valid @PathVariable Integer id ) {
        return autoService.getAuto(id);
    }


}
