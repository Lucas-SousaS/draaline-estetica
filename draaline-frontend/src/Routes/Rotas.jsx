import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Appointments from '../Pages/Appointments/Appointments';
import Services from '../Pages/Services/Services';
import Login from '../Pages/Login/Login';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
