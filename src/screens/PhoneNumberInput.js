import React from "react";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import { Container, Box, Typography, TextField, MenuItem, FormControl, FormHelperText } from "@mui/material";

const PhoneNumberInput = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#E9DDFF",
        backgroundImage: "url('/fondo_reloj.png')",
        backgroundSize: "80% auto",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Capa translúcida */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(233, 221, 255, 0.8)",
          zIndex: 1,
        }}
      />
    {/* Botón de regreso en la parte superior izquierda */}
    <BackButton />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 2 }}>
        {/* Contenedor en fila centrado */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          {/* Texto + Inputs en una sola línea centrada */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center" }}>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                color: "#000",
                whiteSpace: "nowrap",
                fontSize: "1.7rem", // Ajuste de tamaño manual
              }}
            >
              Ingrese su número de móvil:
            </Typography>

            {/* Inputs alineados en fila */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {/* Código de país */}
              <FormControl sx={{ width: "120px" }}>
                <TextField
                  select
                  variant="filled"
                  defaultValue="+57"
                  sx={{ backgroundColor: "white" }}
                >
                  <MenuItem value="+57">+57</MenuItem>
                  <MenuItem value="+51">+51</MenuItem>
                  <MenuItem value="+1">+1</MenuItem>
                </TextField>
                <FormHelperText sx={{ textAlign: "left" }}>Código de país</FormHelperText>
              </FormControl>

              {/* Número móvil */}
              <FormControl sx={{ width: "300px" }}>
                <TextField variant="filled" fullWidth sx={{ backgroundColor: "white" }} />
                <FormHelperText sx={{ textAlign: "left" }}>Número móvil</FormHelperText>
              </FormControl>
            </Box>
          </Box>

          {/* Botón de continuar */}
          <ContinueButton />
        </Box>
      </Container>

      {/* Imagen responsive */}
      <Box
        component="img"
        src="/logo_alertix.png"
        alt="Logo"
        sx={{
          position: "absolute",
          top: { xs: "20%", md: "30%" },
          left: "50%",
          transform: "translate(-50%, -50%) scale(0.6)",
          width: { xs: "120px", md: "200px" },
          height: { xs: "120px", md: "200px" },
          zIndex: 2,
        }}
      />
    </Box>
  );
};

export default PhoneNumberInput;
