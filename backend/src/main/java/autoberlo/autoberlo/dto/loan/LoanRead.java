package autoberlo.autoberlo.dto.loan;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * DTO class for reading loan details.
 * <p>
 * This class represents the details of a single loan, including the car,
 * loan duration, total price, and the user who took the loan.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoanRead {

    /**
     * The unique identifier for the loan.
     */
    private Integer id;

    /**
     * The ID of the car being loaned.
     */

    private int carId;

    /**
     * The start date of the loan.
     */

    private LocalDate startDate;

    /**
     * The end date of the loan.
     */
    private LocalDate endDate;

    /**
     * The total price of the loan.
     */
    private int totalPrice;

    /**
     * The ID of the user who has taken the loan.
     */
    private int userId;
}
