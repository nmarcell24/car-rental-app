package autoberlo.autoberlo.dto.autok;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AutoList {

    private Integer id;

    private String marka;
    private String type;
    private int power;
    private int price;
}
