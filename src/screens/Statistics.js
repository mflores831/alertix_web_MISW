import React, { useState } from "react";
import { Container, Box, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography, Select, MenuItem, Button } from "@mui/material";
import BackButton from "../components/BackButton";

// Importamos los iconos de MUI
import AlarmIcon from "@mui/icons-material/Alarm";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DevicesIcon from "@mui/icons-material/Devices";
import LogoutIcon from "@mui/icons-material/Logout";
import TaskIcon from "@mui/icons-material/Task";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";




const menuItems = [
    { text: "Alarmas", icon: null },
    { text: "Mis alarmas", icon: <AlarmIcon /> },
    { text: "Estadísticas de alarmas", icon: <QueryStatsIcon /> },
    { text: "Sugerencias de alarmas", icon: <LightbulbIcon /> },
    { text: "Rutinas", icon:null },
    { text: "Mis rutinas", icon: <TaskIcon /> },
    { text: "Integraciones", icon: null},
    { text: "Integraciones con calendarios", icon: <CalendarMonthIcon /> },
    { text: "Integraciones con gestores de tareas", icon: <TaskIcon /> },
    { text: "Dispositivos", icon: null },
    { text: "Mis dispositivos", icon: <DevicesIcon /> },
    { text: "Cuenta", icon: null },
    { text: "Salir", icon: <LogoutIcon />,route:"/" },
  ];

const Statistics = () => {
    const navigate = useNavigate();
  const [selectedStat, setSelectedStat] = useState("totalAlarms");

  // Determinar la imagen a mostrar según la opción seleccionada
  const imageSrc = selectedStat === "totalAlarms" ? "/estadistica_1.png" : "/estadistica_2.png";

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
    <BackButton top={100} left={450} /> {/* Nueva posición */}
<Drawer
            variant="permanent"
            sx={{
                width: 320,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                width: 320,
                boxSizing: "border-box",
                backgroundColor: "#B69DF7",
                borderRadius: "16px",
                marginTop: "128px",
                padding: "12px",
                height: "auto", // Permitir que el contenido defina la altura
                maxHeight: "90vh", // Evitar que ocupe todo el viewport
                overflow: "hidden", // Asegurar que no haya desbordamientos
                },
            }}
            >

        <List>
        {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ flexDirection: "column", alignItems: "start" }}>
            {item.icon ? (
                <ListItemButton
                    sx={{ borderRadius: "100px", padding: "16px 24px", width: "100%" }}
                    onClick={() => {
                        //alert(`Navegando a: ${item.route}`); // Para verificar que se ejecuta el evento
                        navigate(item.route);
                        //navigate("/ingreso-codigo");
                    }}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>

            ) : (
                <>
                {index !== 0 && <Divider sx={{ width: "100%", backgroundColor: "rgba(255, 255, 255, 0.3)", my: 1 }} />}
                <Typography 
                    variant="subtitle1" 
                    sx={{ pl: "24px", py: "12px", fontWeight: "bold", color: "#333" }}
                >
                    {item.text}
                </Typography>
                </>
            )}
            </ListItem>
        ))}
        </List>


      </Drawer>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2, mt: "-20vh" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Encabezado alineado arriba */}
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="h4" fontWeight={600} color="#1D1B20">
              Estadística de uso de alarmas
            </Typography>
          </Box>

          {/* Select y botón alineados horizontalmente */}
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
            {/* Select */}
            <Box sx={{ width: 400 }}>
              <Select
                fullWidth
                value={selectedStat}
                onChange={(e) => setSelectedStat(e.target.value)}
                sx={{ background: "white", borderRadius: 1 }}
              >
                <MenuItem value="totalAlarms">Número total de alarmas creadas</MenuItem>
                <MenuItem value="snoozedAlarms">Veces que se ha pospuesto las alarmas</MenuItem>
              </Select>
            </Box>

            {/* Botón alineado con el Select */}
            <Button
              variant="outlined"
              sx={{
                borderRadius: 10,
                borderColor: "#4F378B",
                color: "#4F378B",
                textTransform: "none",
                height: 40, // Ajuste para igualar altura con el select
                "&:hover": { backgroundColor: "rgba(101, 85, 143, 0.12)" },
              }}
              onClick={() => navigate("/feedback")} // Redirige a Feedback.js
            >
              Feedback de cumplimiento
            </Button>
          </Box>
        </Box>

        {/* Imagen que cambia dinámicamente */}
        <Box
          component="img"
          src={imageSrc}
          alt="Estadísticas"
          sx={{
            width: "80%", // Ajusta el tamaño de la imagen según sea necesario
            maxWidth: "600px", // Evita que se agrande demasiado
            marginTop: 3, // Espaciado superior
            zIndex: 2,
          }}
        />
      </Container>

      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <Box
          component="img"
          src="/logo_alertix.png"
          alt="Logo"
          sx={{
            width: "60px",
            height: "60px",
          }}
        />
        <Typography variant="h4" fontWeight={600} sx={{ ml: 2, color: "#333" }}>
          Alertix
        </Typography>
      </Box>
    </Box>
  );
};

export default Statistics;
