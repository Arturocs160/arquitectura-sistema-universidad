import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Inicio({ handleLogin, error }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await handleLogin({ email, password });
    if (result) navigate("/entrega");
  };

  return (
    <div className="registro">
      <h1>Inicia sesión</h1>
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
