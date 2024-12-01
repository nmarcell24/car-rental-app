import { useState } from "react";
import {
  Autocomplete,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Form = () => {
  const [carType, setCarType] = useState("");
  const [valueFrom, setValueFrom] = useState();
  const [valueTo, setValueTo] = useState();

  const handleChange = (event) => {
    setCarType(event.target.value);
  };

  const cities = [
    { label: "Nyíregyháza" },
    { label: "Monor" },
    { label: "Debrecen" },
  ];

  return (
    <div className="bg-white sm:w-96 mx-8 flex items-center justify-center flex-col p-8 pt-6 rounded border-8 border-yellow-50">
      <h1 className="text-3xl sn:text-4xl font-medium mb-7">
        It'easy for you to <strong>rent a car</strong>
      </h1>
      <FormControl fullWidth className="flex flex-col gap-6">
        <InputLabel id="demo-simple-select-label">Car type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={carType}
          name="carType"
          onChange={handleChange}
        >
          <MenuItem value={"Offroad"}>Offroad</MenuItem>
          <MenuItem value={"City"}>City</MenuItem>
          <MenuItem value={"Sport"}>Sport</MenuItem>
        </Select>
        <Autocomplete
          disablePortal
          options={cities}
          renderInput={(params) => (
            <TextField {...params} label="Where are you now" />
          )}
        />
        <Autocomplete
          disablePortal
          options={cities}
          renderInput={(params) => (
            <TextField {...params} label="Where do you want to go" />
          )}
        />
        <div className="flex gap-5 w-full">
          <DatePicker
            label="From"
            name="from"
            value={valueFrom}
            onChange={() => setValueFrom(valueFrom)}
          />
          <DatePicker
            label="To"
            name="to"
            value={valueTo}
            onChange={() => setValueTo(valueTo)}
          />
        </div>
        <Button variant="contained">Reserve Now</Button>
      </FormControl>
    </div>
  );
};

export default Form;
