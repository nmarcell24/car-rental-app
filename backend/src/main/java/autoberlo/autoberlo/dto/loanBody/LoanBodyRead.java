package autoberlo.autoberlo.dto.loanBody;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoanBodyRead {
    private Integer id;

    private int carId;

    private LocalDate startDate;
    private LocalDate endDate;
    private int totalPrice;
}
