package autoberlo.autoberlo.dto.cars;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CarList {

    private Integer id;

    private String marka;
    private String carType;
    private int horsePower;

}
