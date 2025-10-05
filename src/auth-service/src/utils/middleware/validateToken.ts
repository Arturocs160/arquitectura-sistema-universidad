import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config'
import { connect } from "../../../db/db";

export async function validateToken(request: Request, response: Response, next: NextFunction) {
    const accessToken = request.headers['authorization']?.split(' ')[1];

    if (!accessToken) {
        return response.status(401).send('Unauthorized: No token provided');
    }

    try {
        const db = await connect();
        const revokedCollection = db.collection('revokedTokens');

        const isRevoked = await revokedCollection.findOne({ token: accessToken });
        if (isRevoked) {
            return response.status(401).send('Access denied: Token has been revoked');
        }

        jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return response.status(401).send('Access denied: Invalid token');
            } else {
                next();
            }
        });
    } catch (error) {
        console.error('Token validation error:', error);
        return response.status(500).send('Internal server error');
    }
}
