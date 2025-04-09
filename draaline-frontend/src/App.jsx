import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appointments from './Pages/Appointments/Appointments';
import Rotas from './Routes/Rotas';

function App() {
  return (
    <Rotas />
  );
}

export default App;
