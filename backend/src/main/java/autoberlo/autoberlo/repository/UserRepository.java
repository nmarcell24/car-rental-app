package autoberlo.autoberlo.repository;


import autoberlo.autoberlo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(nativeQuery = true, value = "SELECT * FROM users WHERE id = :id")
    User findUserById(@Param("id") int id);

    @Query(nativeQuery = true, value = "SELECT * FROM users WHERE email = :email")
    User findUserByEmail(@Param("email") String email);



}
