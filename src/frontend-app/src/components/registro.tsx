import { Link } from "react-router-dom";

export default function Registro({
  handleRegister,
  email,
  setEmail,
  password,
  setPassword,
  error,
  success,
}: any) {
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
