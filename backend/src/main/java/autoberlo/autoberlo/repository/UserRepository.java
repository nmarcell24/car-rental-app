package autoberlo.autoberlo.repository;


import autoberlo.autoberlo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findUserByUsername(String username);

    @Query(nativeQuery = true,
            value="SELECT p.id FROM permission p " +
                    "INNER JOIN allocate a ON p.id = a.permission_id " +
                    "WHERE a.user_id = :userid")
    List<String> findPermissionsByUser(@Param("userid") Integer userId);



}
