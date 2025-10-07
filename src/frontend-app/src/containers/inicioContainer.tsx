import { useState } from "react";
import { factoryMethod } from "../services/factoryMethod";
import { useNavigate } from "react-router-dom";
import Inicio from "../components/inicio";

export default function inicioContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const factory = factoryMethod("auth");
      const response = await factory.post("/login", {
        email,
        password,
      });

      const { result } = response.data;

      navigate("/entrega");
    } catch (error: any) {
      if (error.isAxiosError) {
        return { error: error.message, status: error.status };
      }
    }
  };
  return (
    <Inicio
      handleLogin={handleLogin}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
    />
  );
}
