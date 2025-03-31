package autoberlo.autoberlo.service;

import autoberlo.autoberlo.converter.AllocateConverter;
import autoberlo.autoberlo.dto.allocate.AllocateList;
import autoberlo.autoberlo.dto.allocate.AllocateRead;
import autoberlo.autoberlo.dto.allocate.AllocateSave;
import autoberlo.autoberlo.model.Allocate;
import autoberlo.autoberlo.repository.AllocateRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


public class AllocateService {
    @Autowired
    private AllocateRepository allocateRepository;

    public AllocateRead createAllocate(@Valid AllocateSave allocateSave) {
        Allocate allocate = AllocateConverter.convertSaveToModel(allocateSave);
        return AllocateConverter.convertModelToRead(allocate);
    }

    public List<AllocateList> listAllocate() {
        List<Allocate> allocates = allocateRepository.findAll();
        return AllocateConverter.convertModelsToList(allocates);
    }

}
