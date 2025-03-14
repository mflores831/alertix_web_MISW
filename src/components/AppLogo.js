import React from "react";
import { Typography, Box } from "@mui/material";

const AppLogo = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: "40%", md: "45%" }, // Ajuste de posición en pantallas pequeñas
        left: "50%",
        transform: "translate(-50%, -50%)", // Centrado absoluto
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          color: "#1D1B20",
          fontSize: { xs: "2rem", md: "3rem" }, // Tamaño adaptable
        }}
      >
        Alertix
      </Typography>
    </Box>
  );
};

export default AppLogo;
