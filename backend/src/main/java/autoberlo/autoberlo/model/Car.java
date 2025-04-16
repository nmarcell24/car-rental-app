package autoberlo.autoberlo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

/**
 * Entity class that represents a car in the car rental system.
 * <p>
 * The {@code Car} entity contains information about a specific vehicle,
 * including brand, type, performance data, seating, fuel and transmission types,
 * as well as its price category and associated image.
 * </p>
 * <p>
 * This entity is mapped to the {@code car} table in the database.
 * It uses Lombok annotations to generate constructors, getters and setters.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "car")
public class Car {

    /**
     * The unique identifier of the car.
     * Auto-generated using identity strategy.
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * The manufacturer or brand of the car (e.g., BMW, Toyota).
     */
    private String brand;

    /**
     * The specific model or type of the car (e.g., SUV, Sedan).
     */


    private String carType;

    /**
     * The horsepower of the car's engine.
     */

    private int horsePower;

    /**
     * The manufacturing year of the car model.
     */

    private int modelYear;

    /**
     * The total number of seats available in the car.
     */

    private int numberOfSeats;


    /**
     * The type of fuel used by the car (e.g., Petrol, Diesel, Electric).
     */
    private String fuelType;


    /**
     * The type of transmission (e.g., Manual, Automatic).
     */

    private String transmissionType;

    /**
     * The drive configuration of the car (e.g., FWD, RWD, AWD).
     */

    private String driveTrain;

    /**
     * The URL of the car's image used in the frontend display.
     */

    private String imageUrl;

    /**
     * The ID of the price category the car belongs to.
     * Used for categorizing cars by rental price ranges.
     */

    @JoinColumn(name = "price_category_id")
    private int priceCategoryId;



}