import React, { useState } from "react";
import SendCodeButton from "../components/SendCodeButton";
import BackButton from "../components/BackButton";
import { Container, Box, Typography, Radio, RadioGroup, FormControlLabel, FormHelperText, FormControl } from "@mui/material";

const FormSelection = () => {
    const [selectedOption, setSelectedOption] = useState("sms");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
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

            <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
                {/* Contenedor en fila (Texto a la izquierda, radios a la derecha) */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                    {/* Texto en dos líneas */}
                    <Typography
                        variant="h5"
                        fontWeight={600}
                        sx={{
                            color: "#000",
                            textAlign: "left",
                            fontSize: "1.7rem",
                            whiteSpace: "pre-line", // Permite saltos de línea
                        }}
                    >
                        Seleccione opción de envío de código{"\n"}de autenticación:
                    </Typography>

                    {/* Opciones de radio con helper text debajo */}
                    <RadioGroup value={selectedOption} onChange={handleChange}>
                        <FormControl sx={{ mb: 2 }}>
                            <FormControlLabel value="sms" control={<Radio />} label="SMS" />
                            <FormHelperText sx={{ textAlign: "left" }}>Mensaje de texto</FormHelperText>
                        </FormControl>

                        <FormControl sx={{ mb: 2 }}>
                            <FormControlLabel value="email" control={<Radio />} label="Whatsapp" />
                            <FormHelperText sx={{ textAlign: "left" }}>Mensaje instantáneo</FormHelperText>
                        </FormControl>

                        <FormControl>
                            <FormControlLabel value="phone" control={<Radio />} label="Llamada telefónica" />
                            <FormHelperText sx={{ textAlign: "left" }}>Llamada telefónica sin costo</FormHelperText>
                        </FormControl>
                    </RadioGroup>
                </Box>

                {/* Botón de continuar */}
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
                    <SendCodeButton />
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

export default FormSelection;
