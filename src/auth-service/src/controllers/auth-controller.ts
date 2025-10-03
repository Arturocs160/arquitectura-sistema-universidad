import { validateToken } from "../utils/middleware/validateToken";
import { AuthService } from "../services/auth";
import { Router, Request, Response } from "express";

const authService = new AuthService();

const routerAuth = Router();

routerAuth.post("/login", async (request: Request, response: Response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json({ message: "Email y contraseña son requeridos" });
  }

  const result = await authService.login({ email, password });
  
  if (result.error) {
    return response.status(401).json({ message: "Credenciales inválidas" });
  }
  
  return response.json({ result });
});

routerAuth.post("/create-user", async (request: Request, response: Response) => {
  const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({ message: "Email y password son requeridos" });
    }

    try {
      await authService.createUser({ email, password, role: "alumno" });
      return response.status(201).json({ message: "Usuario creado exitosamente" });
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      return response.status(500).json({ message: "Error al crear el usuario" });
    }
  }
);

routerAuth.get("/validate-token", validateToken, (request: Request, response: Response) => {
  return response.status(200).json({ message: "Token válido" });
});

export default routerAuth;
