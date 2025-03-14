import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import PhoneNumberInput from "./screens/PhoneNumberInput"; // Nueva pantalla de ingreso de número
import FormSelection from "./screens/FormSelection"; // Nueva pantalla de selección de formato
import CodeRegister from "./screens/CodeRegister"; // Nueva pantalla de ingreso de código
import Welcome from "./screens/Welcome";
import Statistics from "./screens/Statistics";
import Feedback from "./screens/Feedback";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bienvenida" element={<Welcome />} />
        <Route path="/estadisticas" element={<Statistics />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/ingreso-numero" element={<PhoneNumberInput />} />
        <Route path="/seleccion-forma" element={<FormSelection />} />
        <Route path="/ingreso-codigo" element={<CodeRegister />} />
      </Routes>
    </Router>
  );
};

export default App;