package autoberlo.autoberlo.dto.allocate;

import autoberlo.autoberlo.model.Permission;
import autoberlo.autoberlo.model.User;
import lombok.Data;

@Data
public class AllocateList {
    private Integer id;

    private User user;


    private Permission permission;
}
