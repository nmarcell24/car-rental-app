package autoberlo.autoberlo.repository;


import autoberlo.autoberlo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Repository interface for handling CRUD operations on the 'User' entity.
 * This interface extends JpaRepository, which provides built-in methods for database operations.
 * It also includes custom queries for finding user data and permissions.
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász kristóf
 */

public interface UserRepository extends JpaRepository<User, Integer> {



    /**
     * Finds a user by their username.
     *
     * @param username the username of the user
     * @return the User object associated with the username
     */
    User findUserByUsername(String username);

    /**
     * Finds the list of permissions for a given user based on the userId.
     * This query fetches permission IDs associated with the user.
     *
     * @param userId the ID of the user whose permissions are being retrieved
     * @return a list of permission IDs
     */
    @Query(nativeQuery = true,
            value="SELECT p.id FROM permission p " +
                    "INNER JOIN allocate a ON p.id = a.permission_id " +
                    "WHERE a.user_id = :userid")
    List<String> findPermissionsByUser(@Param("userid") Integer userId);



}
