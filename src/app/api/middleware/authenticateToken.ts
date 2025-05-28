import jwt from "jsonwebtoken"
import type { Request, Response, NextFunction } from 'express';


const authenticate = function authenticateToken(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization || "";
    const token = authHeader && authHeader.split(' ')[1].replace('"', "").replace('"', "");
    const secretKey: string = process.env.API_JWT_SECRET ?? "";
    const userData = jwt.verify(token, secretKey);
    req.body = userData
    next();
}

export default authenticate