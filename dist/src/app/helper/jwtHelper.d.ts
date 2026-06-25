import type { JwtPayload, Secret } from "jsonwebtoken";
export declare const JwtHelper: {
    generateToken: (payload: any, secret: Secret, expiresIn: string) => string;
    verifyToken: (token: string, secret: Secret) => JwtPayload;
};
//# sourceMappingURL=jwtHelper.d.ts.map