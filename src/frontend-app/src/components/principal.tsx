import React from "react";
import "./styles.css";
import img1 from "../assets/img/img1.png";
export default function Principal() {
  return (
    <div>
      <div className="carrusel-img">
        <img src={img1} alt="" />
      </div>
      <div className="opciones">
        <div className="op1">
          <div className="imagen">
            <i className="bi bi-backpack2"></i>
          </div>
          <div className="texto">
            <a href="#">ADMISION</a>
          </div>
        </div>
        <div className="op2">
          <div className="imagen">
            <i className="bi bi-whatsapp"></i>
          </div>
          <div className="texto">
            <a href="#">COMUNICATE CON NOSOTROS</a>
          </div>
        </div>
        <div className="op3">
          <div className="imagen">
            <i className="bi bi-file-earmark-text"></i>
          </div>
          <div className="texto">
            <a href="#">ORDEN DE COBRO</a>
          </div>
        </div>
        <div className="op4">
          <div className="imagen">
            <i className="bi bi-envelope"></i>
          </div>
          <div className="texto">
            <a href="#">BUZON</a>
          </div>
        </div>
      </div>
      <div className="container-info">
        <div className="info">
          <h2>Misión</h2>
          <p>
            Somos una Institución de Educación Superior que forma profesionistas
            con una visión integral y humanista, con capacidad de adaptación y
            comprometidos con su entorno como líderes; impulsando el desarrollo
            sostenible de la ciencia y la tecnología fundado en valores,
            inclusión, equidad y corresponsabilidad de la transformación social
            en la región, el país y el mundo.
          </p>
        </div>
      </div>
    </div>
  );
}
