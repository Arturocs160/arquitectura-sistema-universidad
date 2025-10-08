import { useState } from "react";
import { factoryMethod } from "../services/factoryMethod";
import { useNavigate } from "react-router-dom";
import { userModel } from "../model/userModel";

export default function registroContainer(Component: any) {
  return function registroDecorate(props: any) {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (user: userModel) => {
      setError("");
      setSuccess("");

      try {
        const factory = factoryMethod("auth");
        const response = await factory.post("/create-user", {
          user,
        });

        setSuccess(response.data.message || "Registro exitoso");
      } catch (error: any) {
        if (error.isAxiosError) {
          return { error: error.message, status: error.status };
        }
      }
    };
    return (
      <Component
        {...props}
        handleRegister={handleRegister}
        error={error}
        success={success}
      />
    );
  };
}
