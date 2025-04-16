package autoberlo.autoberlo.dto.cars;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.URL;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CarList {

    @NotNull(message = "Az azonosító nem lehet null.")
    private Integer id;

    @NotBlank(message = "A márka nem lehet üres.")
    private String brand;

    @NotBlank(message = "A jármű típusa nem lehet üres.")
    private String carType;

    @Min(value = 1, message = "A férőhelyek száma legalább 1 kell, hogy legyen.")
    private int numberOfSeats;

    @NotBlank(message = "A üzemanyag típusa nem lehet üres.")
    private String fuelType;

    @NotBlank(message = "A váltó típusa nem lehet üres.")
    private String transmissionType;

    @NotBlank(message = "A hajtáslánc típusa nem lehet üres.")
    private String driveTrain;

    @URL(message = "Kérlek, adj meg egy érvényes URL-t az képhez.")
    private String imageUrl;

    @Min(value = 0, message = "Az ár kategória azonosítója nem lehet negatív.")
    private int priceCategoryId;

}
