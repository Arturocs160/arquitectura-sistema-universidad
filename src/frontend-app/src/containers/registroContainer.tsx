import { useState } from "react";
import { factoryMethod } from "../services/factoryMethod";
import { useNavigate } from "react-router-dom";
import Registro from "../components/registro";

export default function registroContainer() {
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
      const factory = factoryMethod("auth");
      const response = await factory.post("/create-user", {
        email,
        password,
      });

      setSuccess(response.data.message || "Registro exitoso");

      setTimeout(() => navigate("/estudiante"), 1500);
    } catch (error: any) {
      if (error.isAxiosError) {
        return { error: error.message, status: error.status };
      }
    }
  };
  return (
    <Registro
      handleRegister={handleRegister}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      success={success}
    />
  );
}
