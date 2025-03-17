package autoberlo.autoberlo.dto.loanHead;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoanHeadRead {
    private Integer id;

    private int userId;

    private int loanBodyId;
}
