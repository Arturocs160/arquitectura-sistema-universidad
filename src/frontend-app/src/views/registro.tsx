import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registroContainer from "../viewmodels/registroContainer";

function Registro({
  handleRegister,

  error,
  success,
}: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await handleRegister({ email, password });
    if (result) {
      setTimeout(() => navigate("/estudiante"), 1500);
    }
  };
  return (
    <div className="registro">
      <h1>Regístrate</h1>
      <form onSubmit={handleSubmit}>
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

export default registroContainer(Registro);