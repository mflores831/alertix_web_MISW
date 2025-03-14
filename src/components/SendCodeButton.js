import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const SendCodeButton = () => {
    const navigate = useNavigate();

    const handleSendCodeClick = () => {
        navigate("/ingreso-codigo"); // 🔄 Navega a la pantalla de selección de forma
    };

  return (
          <Button
            variant="contained"
            sx={{
              mt: 3,
              borderRadius: "50px",
              backgroundColor: "#4F378A",
              "&:hover": { backgroundColor: "#3D2B6F" },
            }}
            size="large"
            onClick={handleSendCodeClick}
          >
            Enviar código
          </Button>
    
  );
};

export default SendCodeButton;

