import jwt from "jsonwebtoken";
import config from "../../config";
const generateToken = (payload, secret, expiresIn) => {
    const token = jwt.sign(payload, secret, { algorithm: "HS256", expiresIn: config.jwt.jwt_access_token_expires });
    return token;
};
const verifyToken = (token, secret) => {
    return jwt.verify(token, secret);
};
export const JwtHelper = {
    generateToken,
    verifyToken
};
//# sourceMappingURL=jwtHelper.js.map