import {
  CardContent,
  Container,
  Divider,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { ButtonForm } from "./components/buttons/ButtonForm";
import { FormCheck } from "./components/forms/FormCheck";
import { FormDate } from "./components/forms/FormDate";
import { FormSelect } from "./components/forms/FormSelect";
import { FormText } from "./components/forms/FormText";
import CustomDialog from "./components/others/CustomDialog";

export const Form = ({data}) => {
  const { marginTop, bgcolor, height, width, borderRadius, boxShadow } = data;
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [dataForm,setDataForm] = useState({});

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      select: "",
      checkbox: false,
      date: "",
    },
  });
  const paisesSelect = [
    "Argentina",
    "Brasil",
    "Colombia",
    "Bolivia",
    "Paraguay",
    "Ecuador",
    "Venezuela",
    "Peru",
    "Uruguay",
  ];

  const onSubmit = (data) => {
    setLoading(true);
    data.date = format(data.date, "dd/MM/yyyy");
    console.log(data.date);
    console.log(data);
    setDataForm(data)
    //simulando una espera
    if (!loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        setOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  };
  return (
    <>
      <Container
        fixed
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          elevation={4}
          sx={{
            marginTop: marginTop,
            bgcolor: bgcolor,
            height: height,
            width: width,
            borderRadius: borderRadius,
            boxShadow: boxShadow,
          }}
        >
          <Typography
            sx={{ fontSize: 17, paddingTop: "5px" }}
            color="black"
            gutterBottom
          >
            Ingrese sus datos
          </Typography>
          <Divider />
          <CardContent>
            <FormControl>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <FormText
                    control={control}
                    errors={errors}
                    register={register}
                    name="username"
                    rulesBol={true}
                    variant="outlined"
                    labelText="Ingrese su Username"
                    color="#212121"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormText
                    type="password"
                    control={control}
                    errors={errors}
                    register={register}
                    name="password"
                    rulesBol="true"
                    variant="outlined"
                    labelText="Ingrese su Password"
                    color="#212121"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormSelect
                    control={control}
                    errors={errors}
                    register={register}
                    name="select"
                    rulesBol={true}
                    variant="outlined"
                    labelText="Nacionalidad"
                    opcion={paisesSelect}
                    color="#212121"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormCheck
                    control={control}
                    errors={errors}
                    name="checkbox"
                    rulesBol={true}
                    variant="filled"
                    labelText="Aceptar las politicas de privacidad"
                  />
                  {/* <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <FormControlLabel         
                    control={<Checkbox  {...field}/>}
                    label="Aceptar Politicas"
                  />
                )}
              /> */}
                </Grid>
                <Grid item xs={12}>
                  <FormDate
                    control={control}
                    errors={errors}
                    register={register}
                    name="date"
                    rulesBol={true}
                    color="#212121"
                    labelText="Fecha de Nacimiento"
                  />
                </Grid>
                <Grid item xs={12}>
                <ButtonForm
                    size="small"
                    variant="contained"
                    type="submit"
                    loading={loading}
                    text="Enviar"
                    color="#212121"
                    onClick ={()=>setOpen(true)}
                  />
                </Grid>
              </Grid>
            </form>
            </FormControl>
          </CardContent>
          <CustomDialog openDialog={open}  data={dataForm}/>
        </Box>
      </Container>
    </>
  );
};
