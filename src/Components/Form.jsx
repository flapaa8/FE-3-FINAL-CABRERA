
import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";

const Form = ({ onSubmit }) => {
  const initialValues = {
    name: "",
    email: "",
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name || values.name.length < 5) {
      errors.name = "Nombre completo debe tener al menos 5 caracteres";
    }

    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Ingresa un email válido";
    }

    return errors;
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "400px",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" color="primary">
        Contáctanos
      </Typography>
      <TextField
        id="outlined-basic"
        label="Nombre completo"
        variant="outlined"
        name="name"
        fullWidth
        onChange={handleChange}
        value={values.name}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name ? errors.name : ""}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        fullWidth
        onChange={handleChange}
        value={values.email}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email ? errors.email : ""}
      />

      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
};

export default Form;