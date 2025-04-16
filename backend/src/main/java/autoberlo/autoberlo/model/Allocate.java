package autoberlo.autoberlo.model;

import jakarta.persistence.*;
import lombok.Data;

/**
 * Entity class that represents the allocation of a specific permission
 * to a user in the car rental system.
 * <p>
 * This entity connects a {@link User} with a specific {@link Permission},
 * meaning that it defines what level of access or rights a user has in the system.
 * </p>
 * <p>
 * The class is annotated with {@link Entity}, marking it as a JPA entity,
 * and uses Lombok's {@link Data} annotation to automatically generate
 * boilerplate code such as getters, setters, and more.
 * </p>
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

@Data
@Entity
public class Allocate {

    /**
     * The unique identifier of the allocation record.
     * It is auto-generated using the identity strategy.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * The user to whom the permission is allocated.
     * This is a many-to-one relationship, meaning multiple permissions
     * can be associated with one user.
     */

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    /**
     * The permission allocated to the user.
     * It is stored as a string in the database using enum type.
     */

    @Enumerated(EnumType.STRING)
    @Column(name = "permission_id")
    private Permission permission;


}
