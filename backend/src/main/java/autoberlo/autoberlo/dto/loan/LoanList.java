package autoberlo.autoberlo.dto.loan;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoanList {
    private Integer id;

    private int carId;
    private LocalDate startDate;
    private LocalDate endDate;
    private int totalPrice;
    private int userId;

}
