import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="prenav">
        <p>
          Universidad Tecnologica de Tehuacán | informacion@uttehuacan.edu.mx |
          Tel: 01(238)3803100
        </p>
      </div>
      <div className="container-nav">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="container-menu">
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/estudiante">Estudiante</Link>
              </li>
              <li>
                <a href="#">Docente</a>
              </li>
              <li>
                <a href="#">Empresario</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
