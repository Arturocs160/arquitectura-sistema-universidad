import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config'

export function validateToken(request: Request, response: Response, next: NextFunction){
    const accessToken = request.headers['authorization'];

    if(!accessToken) response.status(401).send('unauthorized')

    jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
        if (err){
            response.status(401).send('Access denied, token expired or incorrect')
        } else {
            next();
        }
    });

}