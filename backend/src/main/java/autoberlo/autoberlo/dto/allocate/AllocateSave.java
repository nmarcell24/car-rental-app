package autoberlo.autoberlo.dto.allocate;

import autoberlo.autoberlo.model.Permission;
import autoberlo.autoberlo.model.User;
import lombok.Data;


/**
 * DTO class used for saving allocation information.
 * <p>
 * This class represents the data required to allocate a permission to a user.
 * It is used when saving a new allocation to the system, containing the user
 * and the permission to be assigned.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Data
public class AllocateSave {

    /**
     * The user who is to be assigned the permission.
     */

    private User user;


    /**
     * The permission to be assigned to the user.
     */

    private Permission permission;
}
