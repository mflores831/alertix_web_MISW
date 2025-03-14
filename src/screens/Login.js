import React from "react";
import LoginButton from "../components/LoginButton";
import AppLogo from "../components/AppLogo";
import { Box } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        backgroundColor: "#E9DDFF",
        backgroundImage: "url('/fondo_reloj.png')",
        backgroundSize: "80% auto",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa translúcida */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(233, 221, 255, 0.8)",
        }}
      />

      {/* Contenido principal */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <AppLogo />
        <LoginButton />

        {/* Imagen responsive */}
        <Box
          component="img"
          src="/logo_alertix.png"
          alt="Logo"
          sx={{
            position: "absolute",
            top: { xs: "20%", md: "30%" },
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "120px", md: "200px" },
            height: { xs: "120px", md: "200px" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Login;
