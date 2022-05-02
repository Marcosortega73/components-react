import * as React from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export default function CustomDialog({openDialog, data}) {
    const {username,password,select,checkbox,date}= data;

console.log("que onda ", openDialog)
  return (
    <div>
      <BootstrapDialog
     
        aria-labelledby="customized-dialog-title"
        open={openDialog}
      >
          <DialogTitle sx={{marginBottom:"5px"}}>Datos Ingresados: </DialogTitle>
          <Divider />
        <DialogContent dividers>
          <Typography gutterBottom>
         <span>Username: </span> <em>{username}</em>
          </Typography>
          <Typography gutterBottom>
          <span>Password: </span> <em>{password}</em>
          </Typography>
          <Typography gutterBottom>
          <span>Nacionalidad: </span> <em>{select}</em>
          </Typography>
          <Typography gutterBottom>
          <span>Fecha de Nacimiento: </span> <em>{date}</em>
          </Typography> 
          <Typography gutterBottom>
          <span>Terminos aceptado: </span> <em>{checkbox?"Si":"No"}</em>
          </Typography> 
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
