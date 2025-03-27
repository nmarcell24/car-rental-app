package autoberlo.autoberlo.dto.allocate;

import autoberlo.autoberlo.model.Permission;
import autoberlo.autoberlo.model.User;
import lombok.Data;

@Data
public class AllocateSave {

    private User user;

    private Permission permission;
}
