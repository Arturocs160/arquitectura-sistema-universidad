import React from "react";
import logoFooter from "../assets/img/logo_blanco(1).png";
import "./styles.css";
export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="seccion1">
          <h4 className="ftitulo">Contáctanos</h4>
          <ul>
            <li>
              Prolongación de la 1 sur No. 1101 San Pablo Tepetzingo C.P. 75859
              Tehuacán, Puebla
            </li>
            <li>Tel: 01(238) 3803100 | Fax: 01(238) 3803100</li>
            <li>
              Email:{" "}
              <a href="mailto:informacion@uttehuacan.edu.mx">
                informacion@uttehuacan.edu.mx
              </a>
            </li>
            <li>PORQUE SER TÚ ES SER UT</li>
          </ul>
        </div>
        <div className="seccion2">
          <h4 className="ftitulo">Siguenos</h4>
          <a href="https://www.facebook.com/UTTehuacan/">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.youtube.com/user/TigresBlancosUTT">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
        <div className="seccion3">
          <h4 className="ftitulo">Acerca de nosotros</h4>
          <p>
            La Universidad Tecnológica de Tehuacán pertenece al Sub-sistema
            Educativo Nacional de Universidades Tecnológicas, cuyo modelo
            educativo se basa en la práctica y vinculación constante con el
            sector productivo.
          </p>
        </div>
        <div className="seccion4">
          <img src={logoFooter} alt="" />
        </div>
      </div>
      <p className="texto-final">
        2015 ©{" "}
        <span>Universidad Tecnológica de Tehuacán. Derechos Reservados</span>{" "}
        Aviso de protección de datos personales
      </p>
    </footer>
  );
}
