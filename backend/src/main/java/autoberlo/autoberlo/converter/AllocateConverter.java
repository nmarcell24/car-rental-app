package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.dto.allocate.AllocateList;
import autoberlo.autoberlo.dto.allocate.AllocateRead;
import autoberlo.autoberlo.dto.allocate.AllocateSave;
import autoberlo.autoberlo.model.Allocate;

import java.util.ArrayList;
import java.util.List;

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

    public static List<AllocateList> convertModelsToList(List<Allocate> allocate) {
        List<AllocateList> dtoAllocate = new ArrayList<>();
        for (Allocate allocates : allocate) {
            dtoAllocate.add(convertModelToList(allocates));
        }
        return dtoAllocate;
    }

    private static AllocateList convertModelToList(Allocate allocates) {
        AllocateList allocateList = new AllocateList();
        allocateList.setId(allocates.getId());
        allocateList.setUser(allocates.getUser());
        allocateList.setPermission(allocates.getPermission());

        return allocateList;
    }
}
