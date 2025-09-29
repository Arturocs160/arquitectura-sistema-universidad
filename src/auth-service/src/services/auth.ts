import { generateToken } from "../utils/jwt";
import { connect } from "../../db/db";
import brcrypt from 'bcrypt';

class AuthService {

  async login(user: { email: string; password: string;}): Promise<{ email: string; token: string }> {
    
    const db = await connect();
    const usersCollection = db.collection('users');
    const existingUser = await usersCollection.findOne({ email: user.email, password: user.password });

    const token = generateToken({ email: user.email, password: user.password, role: existingUser?.role });
    if (!existingUser) {
        throw new Error('Usuario no encontrado');
    }
    return { email: user.email, token };
  }

  async createUser(user: { email: string; password: string; role: string }): Promise<void> {
    const db = await connect();
    const usersCollection = db.collection('users');

    const salt = await brcrypt.genSalt(10);
    const hashedPassword = await brcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    const existingUser = await usersCollection.findOne({ email: user.email });
    if (existingUser) {
        throw new Error('El usuario ya existe');
    }

    try {
        await usersCollection.insertOne(user);
    } catch (error){
        throw new Error('Error al crear el usuario');
    }
  }

  
}


export { AuthService }