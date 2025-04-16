package autoberlo.autoberlo.service;

import autoberlo.autoberlo.converter.AllocateConverter;
import autoberlo.autoberlo.dto.allocate.AllocateList;
import autoberlo.autoberlo.dto.allocate.AllocateRead;
import autoberlo.autoberlo.dto.allocate.AllocateSave;
import autoberlo.autoberlo.model.Allocate;
import autoberlo.autoberlo.repository.AllocateRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service class for managing car rental allocations.
 *
 * This class handles the creation and listing of car rental records,
 * as well as converting between DTOs and entity models.
 *
 * @author Mandrusz Zsolt, Németh Marcell, Szász Kristóf
 */


@Service
public class AllocateService {

    @Autowired
    private AllocateRepository allocateRepository;

    /**
     * Creates a new car rental allocation.
     *
     * Converts the given {@link AllocateSave} DTO to an {@link Allocate} entity,
     * saves it to the database, and returns the result as an {@link AllocateRead} DTO.
     *
     * @param allocateSave The DTO containing the data required to create a new rental allocation.
     * @return A DTO representing the saved allocation in a readable format.
     */

    public AllocateRead createAllocate(@Valid AllocateSave allocateSave) {
        Allocate allocate = AllocateConverter.convertSaveToModel(allocateSave);
        Allocate savedAllocalte = allocateRepository.save(allocate);
        return AllocateConverter.convertModelToRead(savedAllocalte);
    }

    /**
     * Retrieves a list of all car rental allocations.
     *
     * Fetches all {@link Allocate} entities from the database and converts them into {@link AllocateList} DTOs.
     *
     * @return A list of all rental allocations in DTO format.
     */

    public List<AllocateList> listAllocate() {
        List<Allocate> allocates = allocateRepository.findAll();
        return AllocateConverter.convertModelsToList(allocates);
    }

}
