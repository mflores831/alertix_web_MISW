import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const LoginButton = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/ingreso-numero"); // 🔄 Navega a la pantalla de ingreso de número
    };

  return (
    <Button
      variant="contained"
      sx={{
        position: "absolute",
        top: { xs: "55%", md: "55%" }, // Baja en pantallas pequeñas
        left: "50%",
        transform: "translateX(-50%)", // Centrado horizontalmente
        backgroundColor: "#4F378A",
        borderRadius: "100px",
        fontSize: { xs: 12, md: 14 }, // Tamaño de fuente adaptable
        fontWeight: 500,
        textTransform: "none",
        padding: { xs: "8px 20px", md: "10px 24px" }, // Tamaño de padding adaptable
        "&:hover": { backgroundColor: "#3E2C73" },
      }}
      onClick={handleLoginClick}
    >
      Iniciar Sesión
    </Button>
  );
};

export default LoginButton;
