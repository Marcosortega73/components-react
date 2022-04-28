import { MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export const FormSelect = ({
  control,
  register,
  errors,
  name,
  rulesBol,
  variant,
  labelText,
  opcion
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: rulesBol }}
        render={({ field }) => (
          <TextField
            {...field}
            {...register(name)}
            variant={variant}
            label={labelText}
            select
            defaultValue=""
            size="medium"
            sx={{
                width: 200,
                maxWidth: '100%',
              }}
            error={!!errors[name]}
            helperText={errors[name] && `${name} es un Campo Requerido`}
            autoComplete="off"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {opcion.map((o,index)=> <MenuItem key={index} value={o}>{o}</MenuItem>
            
            )}
           
          </TextField>
        )}
      />
    </>
  );
};


