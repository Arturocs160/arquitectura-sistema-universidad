import React, { useState } from "react";
import "./styles.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Inicio() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      const { result } = response.data;

      navigate("/entrega");
    } catch (error) {
      throw new Error("Error ");
    }
  };

  return (
    <div className="registro">
      <h1>Inicia sesión</h1>
      <form onSubmit={handleLogin}>
        <div>
          <h3>Correo electrónico institucional</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <h3>Contraseña</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Inicia sesión</button>
      </form>
      <div>
        <Link to="/registro">Si aún no tienes cuenta, regístrate</Link>
      </div>
    </div>
  );
}
