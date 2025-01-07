package autoberlo.autoberlo.converter;

import autoberlo.autoberlo.dto.autok.AutoList;
import autoberlo.autoberlo.dto.autok.AutoRead;
import autoberlo.autoberlo.dto.autok.AutoSave;
import autoberlo.autoberlo.model.Auto;

import java.util.ArrayList;
import java.util.List;

public class AutoConverter {

    public static AutoRead convertModelToRead(Auto auto) {
        AutoRead autoRead = new AutoRead();
        autoRead.setId(auto.getId());
        autoRead.setMarka(auto.getMarka());
        autoRead.setType(auto.getType());
        autoRead.setPower(auto.getPower());
        autoRead.setModelYear(auto.getModelYear());
        autoRead.setNumberOfSeats(auto.getNumberOfSeats());
        autoRead.setPrice(auto.getPrice());
        autoRead.setFuelType(auto.getFuelType());
        autoRead.setTransmissionType(auto.getTransmissionType());
        autoRead.setDrivetrain(auto.getDrivetrain());


        return autoRead;
    }


    public static Auto convertSaveToModel(AutoSave autoSave) {
        Auto auto = new Auto();
        auto.setMarka(auto.getMarka());
        auto.setType(auto.getType());
        auto.setPower(auto.getPower());
        auto.setModelYear(auto.getModelYear());
        auto.setNumberOfSeats(auto.getNumberOfSeats());
        auto.setPrice(auto.getPrice());
        auto.setFuelType(auto.getFuelType());
        auto.setTransmissionType(auto.getTransmissionType());
        auto.setDrivetrain(auto.getDrivetrain());

        return auto;
    }

    public static Auto convertSaveToModel(Integer id, AutoSave autoSave) {
        Auto auto = new Auto();
        auto.setId(id);
        auto.setMarka(autoSave.getMarka());
        auto.setType(autoSave.getType());
        auto.setPower(autoSave.getPower());
        auto.setModelYear(autoSave.getModelYear());
        auto.setNumberOfSeats(autoSave.getNumberOfSeats());
        auto.setPrice(autoSave.getPrice());
        auto.setFuelType(autoSave.getFuelType());
        auto.setTransmissionType(autoSave.getTransmissionType());
        auto.setDrivetrain(autoSave.getDrivetrain());

        return auto;
    }

    public static List<AutoList> convertModelsToList(List<Auto> autok) {
        List<AutoList> dtoAuto = new ArrayList<>();
        for (Auto auto : autok) {
            dtoAuto.add(convertModelToList(auto));
        }
        return dtoAuto;
    }

    private static AutoList convertModelToList(Auto auto) {
        AutoList autoList = new AutoList();
        autoList.setId(auto.getId());
        autoList.setMarka(auto.getMarka());
        autoList.setType(auto.getType());
        autoList.setPower(auto.getPower());
        autoList.setPrice(auto.getPrice());
        return autoList;
    }
}
