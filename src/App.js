import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import PhoneNumberInput from "./screens/PhoneNumberInput"; // Nueva pantalla de ingreso de número

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ingreso-numero" element={<PhoneNumberInput />} />
      </Routes>
    </Router>
  );
};

export default App;