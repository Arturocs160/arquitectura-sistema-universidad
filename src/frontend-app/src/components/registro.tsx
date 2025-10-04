import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:3000/create-user", {
        email,
        password,
      });

      setSuccess(response.data.message || "Registro exitoso");

      setTimeout(() => navigate("/estudiante"), 1500);
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || "Error al registrar el usuario"
        );
      } else {
        setError("Error desconocido al registrar");
      }
    }
  };

  return (
    <div className="registro">
      <h1>Regístrate</h1>
      <form onSubmit={handleRegister}>
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
        {success && <p className="success">{success}</p>}

        <button type="submit" className="button">
          Crear cuenta
        </button>
      </form>

      <div>
        <Link to="/estudiante">¿Ya tienes cuenta? Inicia sesión</Link>
      </div>
    </div>
  );
}
