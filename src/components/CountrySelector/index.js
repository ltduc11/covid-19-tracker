import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import React from "react";

function CountrySelector({ value, handleOnChange, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>
        Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country, index) => {
          return (
            <option key={index} value={country.ISO2}>
              {country.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Vui lòng lựa chọn quốc gia!</FormHelperText>
    </FormControl>
  );
}

export default CountrySelector;
