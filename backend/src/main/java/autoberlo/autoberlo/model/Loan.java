package autoberlo.autoberlo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * Entity class that represents a loan (car rental) in the system.
 * <p>
 * The {@code Loan} entity contains details about a car rental made by a user,
 * including the car ID, user ID, rental period, and total price.
 * </p>
 * <p>
 * This entity is managed by JPA and mapped to a database table.
 * Lombok annotations are used to reduce boilerplate code.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Loan {

    /**
     * The unique identifier for the loan record.
     * Auto-generated using the identity strategy.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    private Integer id;

    /**
     * The identifier of the rented car.
     */


    private int carId;

    /**
     * The start date of the rental period.
     */


    private LocalDate startDate;

    /**
     * The end date of the rental period.
     */
    private LocalDate endDate;

    /**
     * The total price for the rental.
     */
    private int totalPrice;

    /**
     * The identifier of the user who made the rental.
     */
    private int userId;
}
