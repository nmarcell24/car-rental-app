package autoberlo.autoberlo.dto.cars;


import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class CarSave {

    private String brand;

    private String carType;

    private int horsePower;

    private int modelYear;

    private int numberOfSeats;

    private String fuelType;

    private String transmissionType;

    private String driveTrain;

    private String imageUrl;

    private int priceCategoryId;

}
