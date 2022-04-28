import {TextField } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import React from "react";
import { Controller } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { alpha, styled } from '@mui/material/styles';


export const FormText = ({type, control,register,errors ,name, rulesBol, variant, labelText,color }) => {
  

    const BootstrapInput = styled(TextField)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(8),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.mode === 'dark' ? {color} : '#2b2b2b',
          border: '1px solid #ced4da',
          fontSize: 16,
          width: 'auto',
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
            id="bootstrap-input"
            type={type}        
            color="primary"
            error={!!errors[name]}
            helperText={errors[name] && `${name} es un Campo Requerido`}
            autoComplete="off"
          />
        )}
      />

    </>
  );
};
