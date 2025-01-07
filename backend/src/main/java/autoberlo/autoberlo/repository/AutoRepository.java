package autoberlo.autoberlo.repository;

import autoberlo.autoberlo.model.Auto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutoRepository extends JpaRepository<Auto, Integer> {
}
