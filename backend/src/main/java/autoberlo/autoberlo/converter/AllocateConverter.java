package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.dto.allocate.AllocateList;
import autoberlo.autoberlo.dto.allocate.AllocateRead;
import autoberlo.autoberlo.dto.allocate.AllocateSave;
import autoberlo.autoberlo.model.Allocate;

import java.util.ArrayList;
import java.util.List;

/**
 * Converter class for transforming Allocate entities between model and DTO representations.
 * <p>
 * Includes methods to convert between:
 * - Allocate entity and AllocateRead DTO
 * - AllocateSave DTO and Allocate entity
 * - Allocate entity and AllocateList DTO
 * <p>
 * Author(s): Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */

public class AllocateConverter {

    /**
     * Converts an {@link Allocate} model to an {@link AllocateRead} DTO.
     *
     * @param allocate the Allocate model to convert
     * @return the corresponding AllocateRead DTO
     */

    public static AllocateRead convertModelToRead(Allocate allocate){
        AllocateRead allocateRead = new AllocateRead();
        allocateRead.setId(allocate.getId());
        allocateRead.setUser(allocate.getUser());
        allocateRead.setPermission(allocate.getPermission());
        return allocateRead;
    }

    /**
     * Converts an {@link AllocateSave} DTO to an {@link Allocate} model.
     *
     * @param allocateSave the DTO containing user and permission data
     * @return a new Allocate entity
     */

    public static Allocate convertSaveToModel(AllocateSave allocateSave) {
        Allocate allocate = new Allocate();
        allocate.setUser(allocateSave.getUser());
        allocate.setPermission(allocateSave.getPermission());
        return allocate;
    }

    /**
     * Converts a list of {@link Allocate} models to a list of {@link AllocateList} DTOs.
     *
     * @param allocate list of Allocate entities
     * @return list of AllocateList DTOs
     */

    public static List<AllocateList> convertModelsToList(List<Allocate> allocate) {
        List<AllocateList> dtoAllocate = new ArrayList<>();
        for (Allocate allocates : allocate) {
            dtoAllocate.add(convertModelToList(allocates));
        }
        return dtoAllocate;
    }

    /**
     * Converts a single {@link Allocate} model to an {@link AllocateList} DTO.
     *
     * @param allocates the Allocate entity
     * @return AllocateList DTO
     */
    private static AllocateList convertModelToList(Allocate allocates) {
        AllocateList allocateList = new AllocateList();
        allocateList.setId(allocates.getId());
        allocateList.setUser(allocates.getUser());
        allocateList.setPermission(allocates.getPermission());

        return allocateList;
    }
}
