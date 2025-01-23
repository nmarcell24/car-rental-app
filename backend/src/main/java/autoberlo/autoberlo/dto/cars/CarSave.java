package autoberlo.autoberlo.dto.cars;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CarSave {

    private String marka;
    private String type;
    private int power;
    private int modelYear;
    private int numberOfSeats;
    private String fuelType;
    private String transmissionType;
    private String drivetrain;
    private int priceId;

}
