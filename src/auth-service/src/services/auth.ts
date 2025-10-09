import { generateToken } from "../utils/jwt";
import { connect } from "../../db/db";
import brcrypt from 'bcrypt';

export interface LoginResponse {
  email?: string;
  token?: string;
  error: boolean;
}

export interface ExistingUser {
  _id: string,
  email: string,
  password: string,
  role: string
}

class AuthService {

  async login(user: { email: string; password: string;}) : Promise<LoginResponse> {
    
    const db = await connect();
    const usersCollection = db.collection('users');
    const existingUser = await usersCollection.findOne({ email: user.email });
    
    if (!existingUser) {
        throw new Error('Usuario no encontrado');
    }

    const comparePasswords = await brcrypt.compare(user.password, existingUser.password) 

    if (!comparePasswords) {
      return { error: true };
    }

    const token = generateToken({ _id: existingUser._id, email: existingUser.email, role: existingUser.role, timestamp: Date.now() });

    return { email: user.email, token, error: false };
  }

  async createUser(user: { email: string; password: string; role: string }) {
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
        const insertUser = await usersCollection.insertOne({ email: user.email, password: user.password, role: user.role });
        return insertUser;
    } catch (error){
        throw new Error('Error al crear el usuario');
    }
  }
  
  async logout(token: string): Promise<{ success: boolean }> {
    const db = await connect();
    const revokedCollection = db.collection('revokedTokens');

    await revokedCollection.insertOne({ token, revokedAt: new Date() });

    return { success: true };
  }

}


export { AuthService }