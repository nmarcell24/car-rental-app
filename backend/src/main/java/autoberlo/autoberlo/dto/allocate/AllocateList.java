package autoberlo.autoberlo.dto.allocate;

import autoberlo.autoberlo.model.Permission;
import autoberlo.autoberlo.model.User;
import lombok.Data;

/**
 * DTO class representing an allocation of a permission to a user.
 * <p>
 * This class holds the data for an allocation, including the associated user
 * and the permission granted to that user.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Data
public class AllocateList {


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
