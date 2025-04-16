package autoberlo.autoberlo.dto.loan;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

/**
 * DTO class for saving loan details.
 * <p>
 * This class represents the data required for creating a new loan,
 * including the car ID, loan dates, total price, and the user ID.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoanSave {

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
     * The ID of the user who is taking the loan.
     */
    private int userId;
}
