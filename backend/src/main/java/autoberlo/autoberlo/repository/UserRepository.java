package autoberlo.autoberlo.repository;


import autoberlo.autoberlo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
