import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import PhoneNumberInput from "./screens/PhoneNumberInput"; // Nueva pantalla de ingreso de número
import FormSelection from "./screens/FormSelection"; // Nueva pantalla de selección de formato

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ingreso-numero" element={<PhoneNumberInput />} />
        <Route path="/seleccion-forma" element={<FormSelection />} />
      </Routes>
    </Router>
  );
};

export default App;