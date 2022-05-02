import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import {styled } from "@mui/material/styles";

export const FormText = ({
  type,
  control,
  register,
  errors,
  name,
  rulesBol,
  variant,
  labelText,
  color,
}) => {
  const BootstrapInput = styled(TextField)(({ theme }) => ({
    "label + &": {},

    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.mode === "dark" ? { color } : "#2b2b2b",
      border: "2px solid #ced4da",
      fontSize: 16,
      width: "auto",
      color: "#ced4da",

      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: "1px 2px 5px 3px rgba(0,0,0,0.75)",
        color: "#cca500",
      },
    },
    ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        boxShadow: "1px 1px 12px 9px rgba(38,50,56,0.75)",
        borderColor: errors[name] ? "red":"#78909c",
      },
    ".css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
      color: "#bbdefb",
      display:"none"
    },

    ".css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      color: "#bbdefb",
    },
    ".css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
      display:"inline",
      color: color,
      borderRadius: "7px",
      backgroundColor:  errors[name] ? "red":"#78909c",
      padding: "0px 5px",
  
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
