package autoberlo.autoberlo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity

public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String marka;
    private String carType;
    private int horsePower;
    private int modelYear;
    private int numberOfSeats;
    private String fuelType;
    private String transmissionType;
    private String driveTrain;
    private int priceCategoryId;


}
//`id` int NOT NULL,
//  `marka` varchar(255) COLLATE utf8mb3_hungarian_ci NOT NULL,
//  `car_type` varchar(32) COLLATE utf8mb3_hungarian_ci NOT NULL,
//  `horse_power` int NOT NULL,
//  `model_year` int NOT NULL,
//  `number_of_seats` int NOT NULL,
//  `fuel_type` varchar(45) COLLATE utf8mb3_hungarian_ci NOT NULL,
//  `transmission_type` varchar(45) COLLATE utf8mb3_hungarian_ci NOT NULL,
//  `drive_train` varchar(45) COLLATE utf8mb3_hungarian_ci NOT NULL,
//  `price_category_id` int NOT NULL,