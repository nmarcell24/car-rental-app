package autoberlo.autoberlo.dto.cars;


import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

/**
 * DTO class for saving a new car.
 * <p>
 * This class is used for creating or saving a new car in the system. It includes the car's
 * attributes such as brand, type, horsepower, model year, seating capacity, fuel type,
 * transmission type, drivetrain, image URL, and price category ID. The class contains no validation
 * constraints as it is assumed that they might be handled elsewhere in the system.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CarSave {

    /**
     * The brand of the car.
     */

    private String brand;

    /**
     * The type or model of the car.
     */

    private String carType;

    /**
     * The horsepower of the car's engine.
     */

    private int horsePower;

    /**
     * The model year of the car.
     */

    private int modelYear;

    /**
     * The number of seats in the car.
     */

    private int numberOfSeats;

    /**
     * The type of fuel the car uses.
     */

    private String fuelType;

    /**
     * The type of transmission in the car.
     */

    private String transmissionType;

    /**
     * The type of drivetrain in the car (e.g., AWD, FWD, RWD).
     */

    private String driveTrain;

    /**
     * The URL of the image representing the car.
     */

    private String imageUrl;

    /**
     * The ID for the price category of the car.
     */

    private int priceCategoryId;

}
