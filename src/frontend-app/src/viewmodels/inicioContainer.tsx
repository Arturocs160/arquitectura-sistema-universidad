import { useState } from "react";
import { factoryMethod } from "../services/factoryMethod";
import { UseAuth } from "../context/authContext";
import { userModel } from "../model/userModel";

export default function inicioContainer(Component: any) {
  return function InicioDecorate(props: any) {
    const [error, setError] = useState("");
    const { login } = UseAuth();

    const handleLogin = async (user: userModel) => {
      setError("");

      try {
        const factory = factoryMethod("auth");
        const response = await factory.post("login", user);
        login({ user });

        const { result } = response.data;
        return result;
      } catch (error: any) {
        if (error.isAxiosError) {
          return { error: error.message, status: error.status };
        }
      }
    };
    return <Component {...props} handleLogin={handleLogin} error={error} />;
  };
}
