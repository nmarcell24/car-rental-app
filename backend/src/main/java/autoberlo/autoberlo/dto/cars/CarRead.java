package autoberlo.autoberlo.dto.cars;


import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

/**
 * DTO class for reading the details of a car.
 * <p>
 * This class is used to retrieve the full details of a car, including the car's
 * attributes such as brand, type, horsepower, model year, seating capacity, fuel type,
 * transmission type, drivetrain, image URL, and price category ID. It includes validation
 * constraints to ensure proper values are provided for each attribute.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CarRead {


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
     * The horsepower of the car's engine.
     */

    @Min(value = 0, message = "A lóerő nem lehet negatív.")
    private int horsePower;


    /**
     * The model year of the car (must be at least 1886, and no later than the current year).
     */

    @Min(value = 1886, message = "A modell évének legalább 1886-nak kell lennie.")
    @Max(value = 2025, message = "A modell éve nem lehet a jövőben.")
    private int modelYear;

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
     * The type of drivetrain in the car (e.g., AWD, FWD, RWD).
     */

    @NotBlank(message = "A hajtáslánc típusa nem lehet üres.")
    private String driveTrain;

    /**
     * The URL of the image representing the car.
     */

    @URL(message = "Kérlek, adj meg egy érvényes URL-t a képhez.")
    private String imageUrl;

    /**
     * The ID for the price category of the car.
     */

    @Min(value = 0, message = "Az ár kategória azonosítója nem lehet negatív.")
    private int priceCategoryId;
}
