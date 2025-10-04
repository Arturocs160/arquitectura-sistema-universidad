import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Inicio() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      const { result } = response.data;

      navigate("/entrega");
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error al iniciar sesión");
      } else {
        setError("Error desconocido al iniciar sesión");
      }
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
            className="input"
          />
        </div>
        <div>
          <h3>Contraseña</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button className="button" type="submit">
          Inicia sesión
        </button>
      </form>

      <div>
        <Link to="/registro">Si aún no tienes cuenta, regístrate</Link>
      </div>
    </div>
  );
}
