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
    @Operation(summary = "List name all of the cars", description = "Returns a list of all cars available in the system.")
    public List<CarList> listAutok() {
        return carService.listAutok();
    }

    @PreAuthorize("hasAuthority('CREATE_CAR')")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/create")
    @Operation(
            summary = "Create a new car",
            description = "Adds a new car to the system. Requires CREATE_CAR permission."
    )
    public CarRead createAuto(@RequestBody @Valid CarSave carSave) {
        return carService.createAuto(carSave);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Read car by id", description = "Fetches detailed information of a car based on the provided ID.")
    public CarRead getAuto(@Valid @PathVariable Integer id) {
        return carService.getAuto(id);
    }

    @PreAuthorize("hasAuthority('DELETE_CAR')")
    @DeleteMapping("/{id}")
    @Operation(
            summary = "Delete car by ID",
            description = "Deletes the car with the specified ID. Requires DELETE_CAR permission."
    )
    public ResponseEntity<String> deleteAuto(@PathVariable Integer id) {
        carService.deleteAuto(id);
        return ResponseEntity.ok("Az autó adatai törölve lettek, de az ID megmaradt.");
    }

}