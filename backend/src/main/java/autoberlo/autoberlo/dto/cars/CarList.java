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
    private int numberOfSeats;
    private String fuelType;
    private String transmissionType;
    private String imageUrl;
    private int priceCategoryId;

}
// private Integer id;
//
//    private String marka;
//    private String carType;
//    private int horsePower;
//    private int modelYear;
//    private int numberOfSeats;
//    private String fuelType;
//    private String transmissionType;
//    private String driveTrain;
//    private int priceCategoryId;
// name, fuel_type, transmission, seats, price, image