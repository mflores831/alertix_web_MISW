import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const BackButton = ({ top = 300, left = 450 }) => { // Valores por defecto
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "absolute",
        top: top, // Usa el valor pasado como prop
        left: left,
        cursor: "pointer",
        zIndex: 10,
        padding: "8px",
      }}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon sx={{ fontSize: 48, color: "#1D1B20" }} />
    </Box>
  );
};

export default BackButton;
