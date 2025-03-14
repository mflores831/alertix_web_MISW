import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ContinueButton = () => {
    const navigate = useNavigate();

    const handleContinueClick = () => {
        navigate("/seleccion-forma"); // 🔄 Navega a la pantalla de selección de forma
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
            onClick={handleContinueClick}
          >
            Continuar
          </Button>
    
  );
};

export default ContinueButton;

