package autoberlo.autoberlo.service;

import autoberlo.autoberlo.converter.AutoConverter;
import autoberlo.autoberlo.dto.autok.AutoList;
import autoberlo.autoberlo.dto.autok.AutoRead;
import autoberlo.autoberlo.dto.autok.AutoSave;
import autoberlo.autoberlo.exception.AutoNotFoundException;
import autoberlo.autoberlo.model.Auto;
import autoberlo.autoberlo.repository.AutoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AutoService {

    @Autowired
    private AutoRepository autoRepository;


    public AutoRead getAuto(Integer id) {
        if(!autoRepository.existsById(id))
            throw new AutoNotFoundException();
        Auto auto = autoRepository.getReferenceById(id);
        return AutoConverter.convertModelToRead(auto);
    }
    public AutoRead updateAuto(Integer id, AutoSave autoSave) {
        if(!autoRepository.existsById(id))
            throw new AutoNotFoundException();
        Auto auto = autoRepository.save(AutoConverter.convertSaveToModel(id, autoSave));
        return AutoConverter.convertModelToRead(auto);
    }


    public List<AutoList> listAutok() {
        List<Auto> autok = autoRepository.findAll();
        return AutoConverter.convertModelsToList(autok);
    }

    public AutoRead createAuto(@Valid AutoSave autoSave) {
        Auto auto = autoRepository.save(AutoConverter.convertSaveToModel(autoSave));
        return AutoConverter.convertModelToRead(auto);
    }


}
