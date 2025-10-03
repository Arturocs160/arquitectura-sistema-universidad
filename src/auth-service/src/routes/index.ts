import { Express } from "express";
import routerAuth from '../controllers/auth-controller';

export function routes (app: Express){
    app.use('/', routerAuth);
}