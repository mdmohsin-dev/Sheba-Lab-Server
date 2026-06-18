import type { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import config from "../../config";


const generateToken = (payload: any, secret: Secret, expiresIn: string) => {
    const token = jwt.sign(payload, secret, { algorithm: "HS256", expiresIn: config.jwt.jwt_access_token_expires } as SignOptions);
    return token;
}

const verifyToken = (token: string, secret: Secret) => {
    return jwt.verify(token, secret) as JwtPayload
}


export const JwtHelper = {
    generateToken,
    verifyToken
}