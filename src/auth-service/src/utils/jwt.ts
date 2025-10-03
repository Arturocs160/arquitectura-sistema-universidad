import jwt, { Secret } from 'jsonwebtoken';
import 'dotenv/config'

const SECRET_KEY: Secret = process.env.JWT_SECRET!;

export interface TokenPayload {
  email: string;
  password: string;
  role?: string;
}

export function generateToken(payload: TokenPayload, expiresIn = 3600): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, SECRET_KEY) as TokenPayload;
  } catch (error) {
    console.error('Token inválido:', error);
    return null;
  }
}

export function decodeToken(token: string): TokenPayload | null {
  return jwt.decode(token) as TokenPayload | null;
}
