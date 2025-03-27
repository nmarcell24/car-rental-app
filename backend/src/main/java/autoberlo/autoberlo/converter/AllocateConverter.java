package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.dto.allocate.AllocateRead;
import autoberlo.autoberlo.dto.allocate.AllocateSave;
import autoberlo.autoberlo.model.Allocate;

public class AllocateConverter {

    public static AllocateRead convertModelToRead(Allocate allocate){
        AllocateRead allocateRead = new AllocateRead();
        allocateRead.setId(allocate.getId());
        allocateRead.setUser(allocate.getUser());
        allocateRead.setPermission(allocate.getPermission());
        return allocateRead;
    }

    public static Allocate convertSaveToModel(AllocateSave allocateSave) {
        Allocate allocate = new Allocate();
        allocate.setUser(allocateSave.getUser());
        allocate.setPermission(allocateSave.getPermission());
        return allocate;
    }
}
