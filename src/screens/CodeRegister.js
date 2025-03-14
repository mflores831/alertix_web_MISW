import React, { useState } from "react";
import WelcomeButton from "../components/WelcomeButton";
import BackButton from "../components/BackButton";
import { Container, Box, Typography, TextField, Grid} from "@mui/material";

const CodeRegister = () => {

    const [code, setCode] = useState(["", "", "", "", "", ""]);
  
    const handleChange = (index, event) => {
      const value = event.target.value;
      if (value.length > 1) return;
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        document.getElementById(`code-${index + 1}`).focus();
      }
    };
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
          <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#E9DDFF",
      }}
    >
      <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
        Ingrese el código recibido:
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {code.map((digit, index) => (
          <Grid item key={index}>
            <TextField
              id={`code-${index}`}
              variant="filled"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              inputProps={{ maxLength: 1, style: { textAlign: "center", fontSize: "24px" } }}
              sx={{ width: "48px", height: "56px", background: "white" }}
            />
          </Grid>
        ))}
      </Grid>
      <WelcomeButton />
    </Box>

          {/* Botón de continuar */}
         
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

export default CodeRegister;
