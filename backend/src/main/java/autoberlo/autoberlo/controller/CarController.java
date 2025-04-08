package autoberlo.autoberlo.controller;


import autoberlo.autoberlo.dto.cars.CarList;
import autoberlo.autoberlo.dto.cars.CarRead;
import autoberlo.autoberlo.dto.cars.CarSave;
import autoberlo.autoberlo.service.CarService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/car")
@Tag(name="Car manage", description = "Cru + list")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping("/list")
    @Operation(summary = "List name all of the cars")
    public List<CarList> listAutok() {
        return carService.listAutok();
    }

    @PreAuthorize("hasAuthority('CREATE_CAR')")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create")
    @Operation(summary = "create new car")
    public CarRead createAuto(@RequestBody @Valid CarSave carSave) {
        return carService.createAuto(carSave);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Read car by id")
    public CarRead getAuto(@Valid @PathVariable Integer id) {
        return carService.getAuto(id);
    }

    @PreAuthorize("hasAuthority('DELETE_CAR')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAuto(@PathVariable Integer id) {
        carService.deleteAuto(id);
        return ResponseEntity.ok("Az autó adatai törölve lettek, de az ID megmaradt.");
    }

}