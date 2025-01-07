package autoberlo.autoberlo.dto.autok;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class AutoSave {

    private String marka;
    private String type;
    private int power;
    private int modelYear;
    private int numberOfSeats;
    private int price;
    private String fuelType;
    private String transmissionType;
    private String drivetrain;

}
