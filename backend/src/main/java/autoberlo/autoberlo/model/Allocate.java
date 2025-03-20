package autoberlo.autoberlo.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Allocate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    @Column(name = "permission_id")
    private Permissions permissions;


}
