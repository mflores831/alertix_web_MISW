import React from "react";
import { Container, Box, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


// Importamos los iconos de MUI
import AlarmIcon from "@mui/icons-material/Alarm";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DevicesIcon from "@mui/icons-material/Devices";
import LogoutIcon from "@mui/icons-material/Logout";
import TaskIcon from "@mui/icons-material/Task";
import { Divider } from "@mui/material";



const menuItems = [
  { text: "Alarmas", icon: null },
  { text: "Mis alarmas", icon: <AlarmIcon /> },
  { text: "Estadísticas de alarmas", icon: <QueryStatsIcon />,route:"/estadisticas" },
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

const Welcome = () => {
    const navigate = useNavigate(); // Hook para navegar

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


      
      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 2 ,mt: "-30vh"}}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "25vh", // Ocupa solo el 25% de la pantalla
              paddingTop: "5vh", // Añade un margen superior para darle espacio
              backgroundColor: "#E9DDFF",
            }}
          >
            <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
              ¡Bienvenido al sistema Alertix!
            </Typography>
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            display: "flex",
            alignItems: "center", // Alinea verticalmente el logo y el texto
            zIndex: 2,
        }}
        >
        <Box
            component="img"
            src="/logo_alertix.png"
            alt="Logo"
            sx={{
            width: "60px", // Reduce directamente el tamaño en lugar de usar scale
            height: "60px",
            }}
        />
        <Typography 
            variant="h4" 
            fontWeight={600} 
            sx={{ ml: 2, color: "#333" }} // ml añade margen a la izquierda
        >
            Alertix
        </Typography>
        </Box>



    </Box>
  );
};

export default Welcome;
