package autoberlo.autoberlo.dto.allocate;

import autoberlo.autoberlo.model.Permission;
import autoberlo.autoberlo.model.User;

import lombok.Data;

/**
 * DTO class used for reading allocation information.
 * <p>
 * This class represents the allocation of a permission to a user and is used for
 * displaying the allocation details, such as the user and the assigned permission.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Data
public class AllocateRead {

    /**
     * The unique identifier of the allocation.
     */

    private Integer id;

    /**
     * The user who is assigned the permission.
     */

    private User user;


    /**
     * The permission granted to the user.
     */


    private Permission permission;
}
