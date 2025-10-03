import { validateToken } from "@utils/middleware/validateToken";
import { connect } from "../../db/db";
import { AuthService } from "../services/auth";
// import { validateToken } from "@utils/middleware/validateToken";
import { Router, Request, Response } from "express";

const authService = new AuthService();

const routerAuth = Router();

routerAuth.post("/login", async (request: Request, response: Response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    return response.status(400).json({ message: "Email y contraseña son requeridos" });
  }

  const result = await authService.login({ email, password });
  return response.json({ result });
});

routerAuth.post("/create-user", async (request: Request, response: Response) => {
  const { email, password } = request.body;

    const db = await connect();

    const usersCollection = db.collection("users");
    const insertUser = await usersCollection.insertOne({
      email: email,
      password: password,
    });
    response.send(insertUser);

    if (!email || !password) {
      return response.status(400).json({ message: "Email y password son requeridos" });
    }

    try {
      await authService.createUser({ email, password, role: "user" });
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
