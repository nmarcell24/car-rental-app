package autoberlo.autoberlo.dto.cars;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

/**
 * DTO class representing a car in a list or overview format.
 * <p>
 * This class is used for listing car details, including the car's basic
 * attributes such as brand, type, number of seats, fuel type, transmission,
 * image URL, and price category ID. It includes validation constraints
 * to ensure proper input values.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CarList {

    /**
     * The unique identifier of the car.
     */

    @NotNull(message = "Az azonosító nem lehet null.")
    private Integer id;


    /**
     * The brand of the car.
     */

    @NotBlank(message = "A márka nem lehet üres.")
    private String brand;

    /**
     * The type or model of the car.
     */

    @NotBlank(message = "A jármű típusa nem lehet üres.")
    private String carType;

    /**
     * The number of seats in the car.
     */

    @Min(value = 1, message = "A férőhelyek száma legalább 1 kell, hogy legyen.")
    private int numberOfSeats;

    /**
     * The type of fuel the car uses.
     */

    @NotBlank(message = "A üzemanyag típusa nem lehet üres.")
    private String fuelType;

    /**
     * The type of transmission in the car.
     */

    @NotBlank(message = "A váltó típusa nem lehet üres.")
    private String transmissionType;


    /**
     * The URL of the image representing the car.
     */

    @URL(message = "Kérlek, adj meg egy érvényes URL-t az képhez.")
    private String imageUrl;

    /**
     * The ID for the price category of the car.
     */

    @Min(value = 0, message = "Az ár kategória azonosítója nem lehet negatív.")
    private int priceCategoryId;

}
