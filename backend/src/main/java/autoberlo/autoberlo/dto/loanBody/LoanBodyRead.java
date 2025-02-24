package autoberlo.autoberlo.dto.loanBody;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoanBodyRead {
    private Integer id;

    private int userId;

    private int loanBodyId;
}
