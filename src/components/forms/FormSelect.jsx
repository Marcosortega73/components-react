import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { alpha, styled } from '@mui/material/styles';

export const FormSelect = ({
  control,
  register,
  errors,
  name,
  rulesBol,
  variant,
  labelText,
  opcion,
  color
}) => {

    const BootstrapInput = styled(TextField)(({ theme }) => ({
        
        'label + &': {
          marginTop: theme.spacing(8),
          color:"red"
        },

        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.mode === 'dark' ? {color} : '#2b2b2b',
          border: '1px solid #ced4da',
          fontSize: 16,
          width: '100%',
          color:'#ced4da',
          padding: '10px 12px',
          transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
          ]),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: "#607d8b",
            color:"#cca500"
          },
        },
      }));
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ required: rulesBol }}
        render={({ field }) => (
          <BootstrapInput
            {...field}
            {...register(name)}
            variant={variant}
            label={labelText}
            select
            defaultValue=""
            sx={{
                width: 226,
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
           
          </BootstrapInput>
        )}
      />
    </>
  );
};


