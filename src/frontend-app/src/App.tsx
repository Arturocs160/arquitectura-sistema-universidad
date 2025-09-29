import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Principal from "./components/principal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/inicio";
import Registro from "./components/registro";
import Entrega from "./components/entrega";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/estudiante" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/entrega" element={<Entrega />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
