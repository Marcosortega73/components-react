import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { es } from 'date-fns/locale'


export const FormDate = ({
  control,
  register,
  errors,
  name,
  rulesBol,
  variant,
  labelText,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: rulesBol }}
        render={({ field }) => (
         <LocalizationProvider dateAdapter={AdapterDateFns} locale={es}>
          <DesktopDatePicker
            {...field}
            mask="__/__/____"
            label="Fecha de Nacimiento"
            minDate={new Date("2017-01-01")}
            renderInput={(params) => <TextField {...params} />}
          />
          </LocalizationProvider>
        )}
      />
    </>
  );
};
